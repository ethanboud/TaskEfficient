// Time 1
// Time 2
// Time 3
//From HTML


// const time 1 = 30
// const time 2 = 45
// const time 3 = 60


// Expected (time 1)/(x) = Efficiency %


let allExpected = 0
let allActual = 0







function calcEff (expectedTime, actualTime){
    efficiency = expectedTime/actualTime;
    allExpected += expectedTime;
    allActual += actualTime;
    calcTotalEff()
    Math.round(efficiency *= 100)
    console.log(efficiency)
}




calcEff (30,40) //item 1
calcEff (20,50) //item 2
calcEff (30,80) //item 3
console.log(allActual);
console.log(allExpected);




function calcTotalEff (){
    let dailyEfficiency = allExpected/allActual;   //=   y
    dailyEfficiency *= 100;                     //   (y * 100)
    console.log(dailyEfficiency)
    Math.round(dailyEfficiency);
    console.log(dailyEfficiency);
    console.log('test')
}






//function calcDaily (allExpected, allActual)