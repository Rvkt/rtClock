function updateClock() {
  var now = new Date();

  var day_name = now.getDay(),
    mo = now.getMonth(),
    yyyy = now.getFullYear(),
    day_num = now.getDate(),
    hh = now.getHours(),
    mm = now.getMinutes(),
    sec = now.getSeconds(),
    amPm = "AM";

  // logical statements
  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    amPm = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var week = [
    "SUNDAY",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
  ];

  var values = [
    week[day_name],
    months[mo],
    day_num.pad(2),
    yyyy,
    hh.pad(2),
    mm.pad(2),
    sec.pad(2),
    amPm,
  ];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
