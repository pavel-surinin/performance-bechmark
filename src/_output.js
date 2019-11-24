const fs = require('fs');
const djs = require('declarative-js')

let OUTPUT_FILE_NAME = "./output.md"

function writeLn(text = '') {
    console.log(text);
    fs.appendFileSync(OUTPUT_FILE_NAME, text + '\n', function (err) {
        if (err) throw err;
    });
}

function writeTableStart() {
    fs.appendFileSync(OUTPUT_FILE_NAME, "| Rank | Function | Result |  |  | \n|---|---|---|---|---|\n", function (err) {
        if (err) throw err;
    });
}

function Logger(header, n, example, filename, description = "") {
    this.events = []
    writeLn('## ' + header);
    writeLn();
    writeLn(`Benchmark file [_${filename}_](${filename})`);
    writeLn();
    if (description) {
        writeLn(description);
        writeLn();
    }
    writeLn('Test data with `' + n + '` instances');
    writeLn();
    writeLn('Instance example: \n```javascript\n' + JSON.stringify(example, null, 2) + '\n```');
    writeLn();
    writeTableStart()
}

Logger.prototype.addEvent = function addEvent(event) {
    console.log(String(event.target));
    this.events.push({ event, hz: event.target.hz })
}

Logger.prototype.writeResults = function writeResults() {
    this.events
        .sort(djs.Sort.descendingBy('hz'))
        .forEach((e, index) => {
            let description = String(e.event.target)
                .split("declarative-js")
                .join("**declarative-js**")
            return writeLn(`${index + 1} | ${description} | ~ ${Math.round(1000 / e.event.target.hz)}ms/op | ${Math.round((e.event.target.hz / this.events[0].event.target.hz) * 100)} %`);
        })
}

module.exports = {
    Logger, OUTPUT_FILE_NAME
}