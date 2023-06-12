// Empty variable

const search =prompt("Put the skill: ");

// Data Filter 

const result = devs.filter((data) => data.skill === search);

// finalResult 

const finalResult = [];

// Data Show Console 


result.map((item, index) => {
    finalResult.push(item);
});


console.table(finalResult);