var dateDisplayFormatter = {
  formatDateWithConvertion: function(date, inRegEx) {
    var outRegEx = 'YYYY MM DD';
    this._lastCalculatedDate = this.formatDate(date, inRegEx, outRegEx);
    return this;
  },
  fromNow: function() {
    var hasFullYear = function(nowYear, oldYear,
      nowMonth, oldMonth,
      nowDay, oldDay) {
      return (nowYear - oldYear) >= 0 &&
        (nowMonth - oldMonth) >= 0
    }
    var hasFullMonth = function(nowMonth, oldMonth,
      nowDay, oldDay) {
      return (nowMonth - oldMonth) >= 0 &&
        (nowDay - oldDay) >= 0
    }

    var lastDate = this._lastCalculatedDate;
    var dateComponents = lastDate.split(" ");
    var oldYear = dateComponents[0],
      oldMonth = dateComponents[1],
      oldDay = dateComponents[2];

    var now = new Date();
    var nowDay = now.getDate(),
      nowMonth = now.getMonth() + 1,
      nowYear = now.getFullYear();

    var yearDiff = 0,
      monthDiff = 0,
      dayDiff = 0;

    yearDiff = nowYear - oldYear;
    monthDiff = nowMonth - oldMonth;
    dayDiff = (+nowDay - +oldDay) < 0 ? 0 : (+nowDay - +oldDay);
    console.log(dayDiff);
    console.log(nowDay);
    console.log(oldDay);

    yearDiff = hasFullYear(nowYear, oldYear,
        nowMonth, oldMonth,
        nowDay, oldDay) ?
      yearDiff :
      yearDiff - 1;

    monthDiff = hasFullMonth(nowMonth, oldMonth,
        nowDay, oldDay) ?
      monthDiff :
      monthDiff - 1;

    if (yearDiff >= 1) {
      return (yearDiff + ' year ago');
    } else if (monthDiff >= 1) {
      return (monthDiff + ' month ago');
    }

    return (dayDiff + ' days ago')
  },
  getShortDate: function(date) {
    if (!this._isValidShortDate(date)) {
      return null;
    }

    var dateComponents = this._getShortDateComponents(date);

    return dateComponents.join(this._separators._shortDateSeparator);
  },
  getLongDate: function(date) {
    if (!this._isValidShortDate(date)) {
      return null;
    }

    var dateComponents = this._getShortDateComponents(date);
    dateComponents[1] =
      this._firstCharToUpper(
        this._fromIntToStingMonth(+dateComponents[1])
      );

    return dateComponents.join(this._separators._longDateSeparator);
  },
  formatDate: function(date, inRegEx, outRegEx) {
    var dayIdx = inRegEx.match(new RegExp(this._dateRegExp.day, 'i')).index;
    var monthIdx = inRegEx.match(new RegExp(this._dateRegExp.month, 'i')).index;
    var yearIdx = inRegEx.match(new RegExp(this._dateRegExp.year, 'i')).index;
    var outRegExp = outRegEx || this._dateRegExp.defaultOut;

    var day = date[dayIdx] + date[dayIdx + 1];
    var year = date[yearIdx] + date[yearIdx + 1] + date[yearIdx + 2] + date[yearIdx + 3];
    var month = date[monthIdx] + date[monthIdx + 1];
    var monthType = outRegExp !== this._dateRegExp.defaultOut ?
      this._monthType.num :
      this._monthType.string;

    var resultDate = outRegExp.replace(this._dateRegExp.day, day);
    resultDate = resultDate.replace(this._dateRegExp.year, year);
    resultDate = resultDate.replace(
      this._dateRegExp.month,
      monthType === this._monthType.string ?
      this._firstCharToUpper(this._fromIntToStingMonth(month)) :
      month
    );

    return resultDate;
  },
  _isValidIntDay: function(day) {
    return +day > 0 && +day <= 31;
  },
  _isValidIntMonth: function(month) {
    return +month > 0 && +month <= 12;
  },
  _isValidStringMonth: function(month) {
    return Object.keys(this._months).find(month.toLowerCase());
  },
  _isValidIntYear: function(year) {
    return +year >= 0 && +year <= 9999;
  },
  _isValidShortDate: function(shortDate) {
    if (!this._isValidShortDateLength(shortDate)) {
      return false;
    }

    var date = this._getShortDateComponents(shortDate);

    return this._isValidIntDay(date[0]) &&
      this._isValidIntMonth(date[1]) &&
      this._isValidIntYear(date[2]) &&
      this._isValidDayOfMonth(date[1], date[2]);
  },
  _isValidLongDate: function(longDate) {
    var date = this._getLongDateComponents(longDate);

    return this._isValidIntDay(date[0]) &&
      this._isValidStringMonth(date[1]) &&
      this._isValidIntYear(date[2]) &&
      this._isValidDayOfMonth(date[1], date[2]);
  },
  _isValidDayOfMonth: function(month, day) {
    if (+month) {
      return +month == this._months.February && +day > 29 ? false : true;
    }
    return month === this._months.February &&
      +day > 29 ?
      false :
      true;
  },
  _isValidShortDateLength: function(shortDate) {
    return shortDate.length === this._shortDateMaxLength;
  },
  _getShortDateComponents: function(date) {
    return [
      date[0] + date[1],
      date[2] + date[3],
      date[4] + date[5] + date[6] + date[7]
    ]
  },
  _getLongDateComponents: function(date) {
    var spaceBeforeMonth = date.indexOf(this._longDateSeparator);
    var spaceAfterMonth = date.lastIndexOf(this._longDateSeparator);

    var day = date[0] + date[1];
    var month = date.substring(spaceBeforeMonth, spaceAfterMonth + 1);
    var year = date.substring(spaceAfterMonth + 1);

    return [day, month, year];
  },
  _firstCharToUpper: function(s) {
    if (!s) {
      return s;
    }

    return s[0].toUpperCase() + s.slice(1);
  },
  _isLetter: function(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  },
  _fromIntToStingMonth: function(intMonth) {
    for (var month in this._months) {
      if (this._months[month] == intMonth) {
        return month;
      }
    }
  },
  _lastCalculatedDate: "",
  _shortDateMaxLength: 8,
  _separators: {
    _shortDateSeparator: '-',
    _longDateSeparator: ' '
  },
  _months: {
    january: 01,
    february: 02,
    march: 03,
    april: 04,
    may: 05,
    june: 06,
    july: 07,
    august: 08,
    september: 09,
    october: 10,
    november: 11,
    december: 12
  },
  _monthType: {
    string: 'string',
    num: 'int'
  },
  _dateRegExp: {
    defaultOut: "DD MM YYYY",
    day: 'DD',
    month: 'MM',
    year: 'YYYY'
  }
}