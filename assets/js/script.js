
//DECLARES LINKS TO 1. DROPDOWN MENU VALUES, 2. SUBMIT BUTTON, 3. TEXT INPUT, 4. RESET BTN
const dropDown = document.getElementById("Tasks")
const submit = document.getElementById("submitNewRow")
const actualInput = document.getElementById("ActualTime")
const reset = document.getElementById("reset")


//FUNCTION TO BOTH CLEAR THE EFFICIENCY ARRAY AND REFRESH WEBPAGE WHEN RESET BUTTON PRESSED
reset.addEventListener("click", function(){
    localStorage.removeItem('DailyEfficiency')
    location.reload()
    localStorage.clear()
})

//WHEN SUBMIT BUTTON IS PUSHED , VALUE FROM DROPDOWN IS SENT TO LOCAL STORAGE
submit.addEventListener("click", function (){
    const selectedTask = dropDown.value
    if (selectedTask == isNaN(selectedTask)){
        console.log("Please select a task")
    }else (console.log("Expected task time is", selectedTask, "minutes"))
    localStorage.setItem('TaskValue', selectedTask.toString())
})

//WHEN SUBMIT BUTTON IS CLICKED, users INPUT VALUE IS SENT TO LOCAL STORAGE
submit.addEventListener("click", function(){
    const textValue = actualInput.value
    console.log("The submitted time is", textValue, "minutes")
    localStorage.setItem('SubmitValue', textValue.toString())
})

//PULLS FROM LOCAL STORAGE AND RUNS CALC TO FIND TASK EFFICIENCY PERCENTAGE
submit.addEventListener("click", function () {
    let expectedTime = localStorage.getItem('TaskValue')
        if (expectedTime){
            expectedTime = JSON.parse(expectedTime)
        }
    let actualTime = localStorage.getItem('SubmitValue')
        if (actualTime){
            actualTime = JSON.parse(actualTime)
        }

    efficiency = expectedTime / actualTime
        efficiency *= 100
        console.log('Your task efficiency is', Math.round(efficiency), '%')
        localStorage.setItem('taskEfficiency', Math.round(efficiency).toString())

        //LOGS EACH NEW EFFICIENCY VALUE IN ARRAY
        let dailyEffArray = JSON.parse(localStorage.getItem('DailyEfficiency')) || []
        dailyEffArray.push(Math.round(efficiency))
        localStorage.setItem('DailyEfficiency', JSON.stringify(dailyEffArray))
    })

// SUM ALL EFFICIENCIES, AVERAGE THEM, PUSH OUT TO 'DAILY EFFICIENCY BOX'
submit.addEventListener("click", function(){
    const dailyEfficiency = JSON.parse(localStorage.getItem('DailyEfficiency'))

    console.log(dailyEfficiency)
    let sum = 0
    for (let i = 0; i <dailyEfficiency.length; i++){
        sum += dailyEfficiency[i];
    }
    localStorage.setItem('RollingEffAverage', JSON.stringify(sum))
})

//COUNTS HOW MANY TIMES SUBMIT IS CLICKED
let count = 0

submit.addEventListener("click", () => {
    count++
    console.log(count)
    localStorage.setItem('SubmitButtonCount', JSON.stringify(count))

})

//DIVIDS ROLLING EFFICIENCY BY BUTTON COUNT
submit.addEventListener("click", function(){
    let rollingEff = localStorage.getItem('RollingEffAverage')
        if (rollingEff){
            rollingEff = JSON.parse(rollingEff)
        }

    let btnCount = localStorage.getItem('SubmitButtonCount')
        if (btnCount){
            btnCount = JSON.parse(btnCount)
        }

    dailyEff = rollingEff / btnCount
    console.log('Your daily efficiency is', dailyEff)
    localStorage.setItem('DailyAverage', JSON.stringify(Math.round(dailyEff)))
})

//PULLS FROM LOCAL STORAGE AND CREATES THEN INPUTS EXPECTED VALUE AND ACTUAL VALUE
//ADDS NEW CELLS IN TABLE FOR NEW TASK DATA [EXPECTED] [ACTUAL]
submit.addEventListener("click", function (){
    let userEfficiency = localStorage.getItem('taskEfficiency')
        if (userEfficiency === isNaN(userEfficiency)){
            location.reload()
        }else {(userEfficiency) 
            userEfficiency = JSON.parse(userEfficiency)
        }

    let expectedTime = localStorage.getItem('TaskValue')
        if (expectedTime === isNaN(expectedTime)){
            location.reload()
        }else {(expectedTime) 
            expectedTime = JSON.parse(expectedTime)
        }

    let dailyAverage = localStorage.getItem('DailyAverage')

    const table = document.getElementById('table')
    const newRow = table.insertRow(-1)
    const cell1 = newRow.insertCell(0)
    const cell2 = newRow.insertCell(1)
    // const cell3 = newRow.insertCell(2)
    const cell4 = newRow.insertCell(2)
    cell1.innerHTML = expectedTime
    cell2.innerHTML = userEfficiency
    // cell3.innerHTML = ""
    cell4.innerHTML = dailyAverage
    newRow.setAttribute("class", "border-b-8 border-white bg-blue-400");
})
































// let allExpected = 0
// let allActual = 0

// let actualTime = 10  //WE WILL LINK THIS VALUE FROM INPUT FIELD IN HTML
// let selectedTask = task.addEventListener.selectedTask
// parseInt(selectedTask)
// console.log(selectedTask)

// function calcEff (selectedTask, actualTime){
//     efficiency = selectedTask/actualTime;
//     allExpected += selectedTask;
//     allActual += actualTime;
//     efficiency *= 100
//     Math.round(efficiency)
//     console.log('Your task efficiency is', efficiency, '%')
// //    calcTotalEff()
//     console.log('...........................................................')
// }

// calcEff(selectedTask,actualTime)




// function dataTable (){
//     const table = document.getElementById("table");
//     const row = document.getElementById("tr");
//     const td = document.getElementById("td1")

// //    td1.innerHTML = //OUTPUT FROM FUNCTION
// }

// let allExpected = 0
// let allActual = 0

// function calcEff (expectedTime, actualTime){
//     efficiency = expectedTime/actualTime;
//     allExpected += expectedTime;
//     allActual += actualTime;
//     efficiency *= 100
//     Math.round(efficiency)
//     console.log('Your task efficiency is', efficiency, '%')
//     calcTotalEff()
//     console.log('...........................................................')
// }

// calcEff (task1,100)


// function calcTotalEff (){
//     dailyEfficiency = allExpected/allActual;
//     dailyEfficiency *= 100
//     Math.round(dailyEfficiency)
//     console.log('Your new daily percent is', dailyEfficiency, '%')
// }

