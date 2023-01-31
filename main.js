let raceNumber = Math.floor(Math.random() * 1000);

var registionEarly = true;

var runnerAge = 22;

if (registionEarly && runnerAge > 18){
    raceNumber += 1000;
}

if (registionEarly && runnerAge > 18){
    console.log(`ATTN racer number: ${raceNumber}, you race at 9:30am.`);
} else if (registionEarly !== true && runnerAge > 18){
    console.log(`ATTN racer number: ${raceNumber}, you race at 11:00am.`);
}

if (runnerAge < 18){
    console.log(`ATTN racer number: ${raceNumber}, you race at 12:30 pm.`);
}
