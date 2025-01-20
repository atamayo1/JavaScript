function helloDependingHour(fullName, date) {
    if (date.getHours() <= 12) {
        console.log("Good Morning " + fullName);
    } else if (date.getHours() > 12 && date.getHours() <= 18) {
        console.log("Good Afternoon " + fullName);
    }
}

helloDependingHour("Anthony Tamayo Ortega", new Date());