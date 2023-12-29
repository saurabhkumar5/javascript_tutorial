// // map function


// let arr = [1,56,88,3]

// let res = arr.map(function(a,b,c){
//     //    console.log(a)
//     //    console.log('index:',b)
//         // console.log(c)
   
//         // console.log(a*2)

//         return a+1;

// })

// console.log(res)

// 2.filter function

// let arr = [2,45,7,8];
    
//    let res = arr.filter((a,b,c)=>{
//             // console.log(a)

//             if(a%2==0){
//                 return a;
//             }
//         })
//    console.log(res)


//  let arr = [12,4,8,5,56]

//  let res =  arr.sort((a,b)=>{
//     //    return a-b;
//     // return b-a;
//     // console.log(c)

//  })

// //  console.log(res)


// 4. forEach()

// let arr = [4,78,56,10]

//    arr.forEach((a,b)=>{
//          if(a%3==0){
//             console.log(a)
//          }
//     })



// reduce function

// let arr = [12,23,1,4]

//   let sum = arr.reduce((a,b)=>{
//     return a+b
//   })

//   console.log(sum)



//setTimeout function

  
    // console.log("fist")
    // setTimeout(()=>{
    //   console.log("hello")
    // },5000)

    // console.log("second")


    // setInterval(()=>{
    //   console.log("hello")
    // },2000)


//default parameter

// function sum(a,b=2){
//   console.log(a+b)
// }


//   sum(1,5)



// spread operator

// let a = "saurabh"
// let arr = [12345]
// console.log(...arr);


// let even = [2,4,6,8]
// let odd = [1,3,5,7]

// let arr = [...even,...odd]
// console.log(arr)


// spread with objects

// let obj = {
//   name:"ajit",
//   age:45,
//   class:"js"
// }


// let obj1 = {
//   name1:"ajit",
//   age1:45,
//   class1:"js"
// }

// let a = {...obj,...obj1}
// console.log(a)



// Rest operator 

  // function hello(...a){
         
  //   console.log(a);
  // }

  // hello(2,4,3,8)



  // destructuring


  // let arr = ["ajit","aakash","anuj","kaajal"]

//  let a = arr[0]
//  let b = arr[1];
//  console.log(a,b)

// let [a,b,c] = arr;

// console.log(a,b,c);


let obj = {
  name:"ajit",
  age:45,
  subj:"js"
}


let {name,age,subj} = obj;

console.log(age)