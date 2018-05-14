(function () {
    /**
     * 加幾秒鐘
     */
    Date.prototype.addSeconds = function (seconds) {
        return new Date(this.getTime() + seconds * 1000);
    };
    /**
     * 加幾分鐘
     */
    Date.prototype.addMinutes = function (minutes) {
        return this.addSeconds(minutes * 60);
    };
    /**
     * 加幾小時
     */
    Date.prototype.addHours = function (hours) {
        return this.addMinutes(hours * 60);
    };
    /**
     * 加幾天
     */
    Date.prototype.addDays = function (days) {
        return this.addHours(days * 24);
    };
    /**
     * 加幾星期
     */
    Date.prototype.addWeeks = function (weeks) {
        return this.addDays(weeks * 7);
    };
    /**
     * 加幾個月
     */
    Date.prototype.addMonths = function (months) {
        let y = this.getFullYear();
        let m = this.getMonth() + 1 + months;
        const d = this.getDate();
        const hh = this.getHours();
        const mm = this.getMinutes();
        const ss = this.getSeconds();
        if (m > 12) {
            const addYear = Math.floor(m / 12);
            const month = m % 12;
            y = y + addYear;
            m = month;
        }
        // let index: number = m - 1 + months;
        // if (index >= 0) {
        //     m = index % 12 + 1;
        //     y = y + Math.floor(index / 12);
        // } else {
        //     m = 12 + (index + 1) % 12;
        //     y = y + Math.ceil((index - 11) / 12);
        // }
        // let days: number = daysInMonth(y, m);
        // d = (d > days) ? days : d;
        return new Date(y, m - 1, d, hh, mm, ss);
    };
    /**
     * 加幾年
     */
    Date.prototype.addYears = function (years) {
        return this.addMonths(years * 12);
    };
    /**
     * 日期字串化
     */
    Date.prototype.toFormatString = function (format) {
        try {
            let sDataTime = format;
            const y = this.getFullYear();
            const iYY = y - 1911;
            const m = this.getMonth() + 1;
            const d = this.getDate();
            const hh = this.getHours();
            const mm = this.getMinutes();
            const ss = this.getSeconds();
            sDataTime = sDataTime.replace('YYYY', y.toString());
            sDataTime = sDataTime.replace('YYY', padLeft(iYY.toString(), 3));
            sDataTime = sDataTime.replace('MM', padLeft(m.toString(), 2));
            sDataTime = sDataTime.replace('DD', padLeft(d.toString(), 2));
            sDataTime = sDataTime.replace('hh', padLeft(hh.toString(), 2));
            sDataTime = sDataTime.replace('mm', padLeft(mm.toString(), 2));
            sDataTime = sDataTime.replace('ss', padLeft(ss.toString(), 2));
            return sDataTime;
        }
        catch (err) {
            return '';
        }
    };
    Date.prototype.getDaysInMonth = function (month, year) {
        return (new Date(year, month, 0)).getDate();
    };
    Date.prototype.getCurrentAge = function () {
        const birthdayYear = this.getFullYear();
        const todayYear = (new Date()).getFullYear();
        return todayYear - birthdayYear;
    };
    Date.prototype.countAge = function (birthday) {
        const date = new Date(birthday);
        return date.getCurrentAge();
    };
    function padLeft(str, len) {
        if (str.length > len) {
            return str;
        }
        else {
            return new Array(len - str.length + 1).join('0') + str;
        }
    }
});
//# sourceMappingURL=date-extension.js.map