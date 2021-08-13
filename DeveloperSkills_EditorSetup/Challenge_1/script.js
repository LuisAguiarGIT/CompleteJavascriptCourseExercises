"use strict";

const forecastedTemperatures = new Array(12, 5, -5, 0, 4);

function printForecast(arrayForecasts) {
  let outputString = "";

  for (let i = 0; i < arrayForecasts.length; i++) {
    let processedInfo = `${arrayForecasts[i]}ºC in ${i + 1} days `;

    outputString += processedInfo;
  }

  return outputString;
}

console.log(printForecast(forecastedTemperatures));
