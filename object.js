// let obj = {
//     name:"saurabh",
//     mob : 123456,
//     address:"mohali",
//     marks: [1,88,99,33]
// }

// console.log(obj)
// obj.key = value
// console.log(obj.name)
// console.log(obj.mob)
// console.log(obj.address)

// console.log(obj["name"]);

// console.log(obj.marks[1])


let obj = {
    Name:"saurabh",
    mob : 123456,
    address:{
        city: "chandigargh",
        pincode:12366,
        state:"chandigarh",
        country:"india"
    },
    marks: [1,88,99,33]
}
// console.log(obj.Name)

// obj.hobbies = "playing cricket"
// obj.food = "samosa"



// delete obj.mob;

// console.log(obj)

// for-in loop

for(let a in obj){
    // console.log(obj[a])// gives value
    // console.log(a);//ony key
    console.log(a, obj[a]);
}