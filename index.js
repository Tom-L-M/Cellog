class Logger {
    constructor () {
        this.rawOutput = false;
        this.colors = {
            date: '32', // green
            info: '36', // cyan
            warn: '33', // yellow
            error:'31', // red
            reset: '0', // none
            notice:'34' // blue
        }
    }

    #_colorize (type, string) { return `\x1b[${this.colors[type]}m` + string + '\x1b[0m'; }

    #_format (logType, content) {
        let date = new Date().toISOString();
        let str = '';
        let type = logType.toUpperCase();
        if (!!this.rawOutput) {
            str = `${date} ${type} ${content}`;
        } else {
            str = this.#_colorize(logType, date + ' ' +type + ' ' + content);
        }
        return str;
    }

    setRaw(raw = true) { this.rawOutput = raw; }

    info (content) { console.log(this.#_format('info', content)); }

    error (content) { console.log(this.#_format('error', content)); }

    notice (content) { console.log(this.#_format('notice', content)); }

    warn (content) { console.log(this.#_format('warn', content)); }
}

module.exports = new Logger();