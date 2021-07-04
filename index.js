
// Code your solution here:
function driversWithRevenueOver(list, amount){
    return list.filter(function (driver){
          return driver.revenue > amount 
    })
}

function driverNamesWithRevenueOver(list, amount){
    const filtered = driversWithRevenueOver(list, amount)
    return filtered.map(function (driver){
        return driver.name
  })
}

//my attempt, doesn't work :(
// function exactMatch(list, name, amount){
//     return list.filter(function (driver){
//           return driver.revenue && driver.name === name && amount 
//     })
// }

// function exactMatch (drivers, matcher) {
//     return drivers.filter(function (driver) {
//       let matches = false;
  
//       for (const key in matcher) {
//         matches = driver[key] === matcher[key];
//       }
  
//       return matches;
//     });
//   }

  //how I'd write it ?
  function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
        let match = []
        for (const key in matcher){
            match = driver[key] === matcher[key];
        }
            return match;
    })
}

function exactMatchToList(drivers,matcher){
    const exactMatches = exactMatch (drivers, matcher)
    return exactMatches.map(function (driver){
        return driver.name
    })
}
