var cityList = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
/* 
console.log(cityList);
console.log(cityList[1]);

for (var i = 0; i < cityList.length; i++) {
    console.log(cityList[i]);
} 


cityList.forEach((city, index) => {
    console.log(index + ": " + city);
});
*/

cityList.push("Philadelphia");
cityList.push("San Antonio", "San Diego");
cityList.pop();
cityList.shift();
cityList.unshift("Dallas", "San Jose");
console.log(cityList.length);
console.log(cityList.indexOf("Houston"));
console.log(cityList.includes("San Diego"));
console.log(cityList);
var shortCity = cityList.slice(1, 6);
console.log(shortCity);
cityList.splice(2, 3, "Austin", "Jacksonville");
console.log(cityList);


