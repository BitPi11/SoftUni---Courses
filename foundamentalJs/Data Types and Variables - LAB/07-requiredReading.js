function requiredReading(numOfPages, pagesForHour, numOfDays) {
    let sum = numOfPages / pagesForHour
    let result = sum / numOfDays
    console.log(result)

}

requiredReading(
    432,
    15,
    4

)