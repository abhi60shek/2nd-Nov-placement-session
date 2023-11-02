// mrf - map() reduce() filter()

// map()  - map function is a higher order function. It takes a function as an argument and returns a new array
// old array on that we work , on the old array I call the map function and that map function takes another function in it as a parameter, 
//this function has the logic that works on each element of the old array and creates a new array
// new array is generated
// old array dont gets affected
//syntax : array_name.map(function_name)
// function function_name(element){  logic to work on the element of old array }

// array_name.map((element)=>{ logic to work on the element of old array })


// var array = [1,2,3,4,5,6,7,8,9,10]
// var newarray = array.map((item)=>{ return item*item }) // [1,4,9,16,25,36,49,64,81,100]
// console.log(newarray)

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var newarr=arr.map(solve)  // just pass the function name and don't call it

// function solve(item){
//     return item*2
// }

// console.log(newarr)
// console.log(arr)


// 3 types -- named function , anonymous function , arrow function

// var arr = [1,2,3,4,5,6,7,8,9,10]
// Q1 - create a new array which contains the square-root of each element of the old array
// Q2 - create a new array which contains the cube of each element of the old array   -- hw 
// Q3 - create a new array which contains the double of each element of the old array   -- hw   

// Q4 - use map method to calculate the sum of all the elements of the array
// Q5 - use map method to calculate the product of all the elements of the array
// Q6 - use map method to calculate the factorial of all the elements of the array  

// 8-10 mins

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var newarr = arr.map((item)=>{ return Math.sqrt(item) })
// console.log(newarr)


// var arr = [1,2,3,4,5,6,7,8,9,10]
// var sum = 0  // 1 3 6 10 15 21 28 36 45 55
// arr.map((item)=>{ sum=sum+item })
// console.log(sum)

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var prod = 1  // 1 2 6 24 120 720 5040 40320 362880 3628800
// arr.map((item)=>{ prod=prod*item })
// console.log(prod)

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var factarr = [1,2,6,24,120,720,5040,40320,362880,3628800]
// 1! = 1
// 2! = 2*1 
// 3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5*4*3*2*1
// 6! = 6*5*4*3*2*1

// var factarr = arr.map((item)=>{
//     var fact = 1
//     for(var i=1;i<=item;i++){
//         fact = fact*i
//     }
//     return fact
// })

// console.log(factarr)


// filter function - filter function is a higher order function. It takes a function as an argument and returns a new array
// filter(()=>{})
// dont update the original array
// output is a new array
// filter function takes a function as an argument and that function has the logic to filter out the elements from the old array
// return true - include that element in the new array
// return false - dont include that element in the new array

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var newarr = arr.filter((num)=>{ return num%2==0 })
// console.log(newarr)

// var arr = [1,-8,3,-4,5,-6,7,-8,9,-10]
// var newarr = arr.filter((num)=>{ return num>0 })
// console.log(newarr)

// Questions

// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// Q1 - create a new array which contains only the odd numbers from the old array
// Q2 - create a new array which contains only the  numbers which are divisible by 5 from the old array

// arr = [["mango","sweet"],["orange","sour"],["apple","sweet"],["banana","sweet"],["kiwi","sour"]]
// Q3 - create a new array which contains only the fruits which are sweet in taste
// Q4 - create a new array which contains only the fruits which are sour in taste   - hw

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// var newarr = arr.filter((num)=>{ return num%2!=0 })
// console.log(newarr)

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// var newarr = arr.filter((num)=>{ return num%5==0 })
// console.log(newarr)


// var arr = [["mango","sweet"],["orange","sour"],["apple","sweet"],["banana","sweet"],["kiwi","sour"]]    
// var sweetarr = arr.filter((item)=>{ return item[1]=="sweet" })
// var newarr = sweetarr.map((item)=>{ return item[0] })
// console.log(newarr)


//  reduce() - reduce function is a higher order function. It takes a function as an argument and returns a single value
// can take 2 parameters - function , initial value  (optional)
// output : a single value

// Q> arr = [1,2,3,4,5,6,7,8,9,10] calculate the sum of all the elements of the array using reduce function

// var arr = [1,2,3,4]
// var sum = arr.reduce((accumulater,currentval)=>{return accumulater+currentval})
// console.log(sum)

// var num = [{n:1},{n:2},{n:3},{n:4}]
// //task is to calculate the product of all the elements of the array using reduce function

// var prod = num.reduce((a,c)=>{return a*c.n},1)
// console.log(prod)


// Q > var arr = [1,2,3,4] , subtract all the elements of the array from 100 using reduce function


// api with mrf 
