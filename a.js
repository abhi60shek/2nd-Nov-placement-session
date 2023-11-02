// npm init --y
//npm i node-fetch
// create a file called a.js
// in package.json add "type": "module" after line 5 so that we can use import instead of require

import fetch from "node-fetch";

const url = "https://restcountries.com/v3.1/all";
// data = [{},{},{}]
fetch(url).then((res) => res.json()).then((data) => {
    // var arr = data.map(item=>{
    //      return (item.name.common)
    // })
    // console.log(arr);

    // var arr = data.filter(item => {
    //     return item.independent 
    // })
    // arr = arr.map(item=>{
    //          return (item.name.common)
    // })
    // console.log("Independent countries are")
    // console.log(arr);

    // console.log(data[0])

    // var areasum = data.reduce((acc, item) => {
    //     return acc + item.area
    // },0);

    // console.log(areasum);


});

// var store = await fetch(url);
// var data = await store.json();
