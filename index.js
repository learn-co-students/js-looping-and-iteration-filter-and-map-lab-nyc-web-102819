// Code your solution here:


function driversWithRevenueOver(driver,revenue) {
    return driver.filter(function (dvr) {
        return dvr.revenue > revenue;  
    }
    );
}


function driverNamesWithRevenueOver(driver, revenue) {
    return driversWithRevenueOver(driver, revenue).map(function(each){
        return each.name;
    });
} 

function exactMatch(drivers, req) {
    return drivers.filter(function (driver) {
        let matches = false;

        for (const key in req) {
          matches = driver[key] === req[key];
        }
    
        return matches;
      });
    }

function exactMatchToList(drivers,req) {
    return exactMatch(drivers,req).map( function (each) {
        return each.name
    })
}
