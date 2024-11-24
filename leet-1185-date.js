var dayOfTheWeek = function(day, month, year) {
    let dateStr = year.toString() + "-" + month.toString() + "-" + day.toString();
    let date = new Date(dateStr);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysOfWeek[date.getDay()]
};

console.log(dayOfTheWeek(22,5,1997))