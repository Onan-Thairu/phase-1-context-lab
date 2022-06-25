function createEmployeeRecord(array) {
    if (array.length === 0) {
        return {
            timeInEvents: [],
            timeOutEvents: []
        }
    } else {
        return {
            firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
        }
    }
}

function createEmployeeRecords(arrOfArrays) {
    let EmployeeRecords = []
    arrOfArrays.map(array => EmployeeRecords.push(createEmployeeRecord(array)))
    return EmployeeRecords
}

function createTimeInEvent(date) {
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
    this.timeInEvents.push(timeInObj)
    return this
}

function createTimeOutEvent(dateStamp) {
    const timeoutObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    }
    this.timeOutEvents.push(timeoutObj)
    return this
}

function hoursWorkedOnDate(date) {
    const timeinObj = this.timeInEvents.find(dayObj => dayObj.date === date)
    const timeinHours = timeinObj.hour
    const timeoutObj = this.timeOutEvents.find(dayObj => dayObj.date === date)
    const timeoutHours = timeoutObj.hour
    const time = timeoutHours - timeinHours
    const hours = Math.floor(time/100)
    return hours
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

