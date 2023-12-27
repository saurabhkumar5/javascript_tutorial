// console.log("hello")
// document.write("<h2>hello</h2>")

// console.log(window.document)

// 1 by id
// let a = document.getElementById("hello")
// console.log(a);

// //2. by class
//     let b = document.getElementsByClassName("world")
//     console.log(b);

// // 3. by tagname
//        let c = document.getElementsByTagName("p")
//        console.log(c);
//4  by queryselector

//   let a = document.querySelector(".world")
// let a = document.querySelector(".world")
//   console.log(a)


// 1.innerText, innerHTML, textContent

// let ajeet = document.querySelector(".world")
    // console.log(ajeet)
  // console.log(ajeet.innerText);
  // console.log(a.innerHTML);
  // console.log(a.textContent);

    // ajeet.innerText = "ajit";
    // ajeet.innerText = "aakash";
    // console.log(ajeet)


    // let img = document.querySelector('img')
     
    //   img.setAttribute('src', 'home.png')
    //   img.setAttribute('id', 'spiderman')

    //   console.log(img)




// let obj = {
//   name: "saurabh"
// }

// console.log(obj.name)





// let naam = document.querySelector('.world')
//      naam.style.backgroundColor = "yellow"
//      naam.style.backgroundColor = "green"
//      naam.style.color = "red"


// let child = document.querySelector('h1')
 
// console.log(child)
 
 let ele = document.createElement('h1')
 let p = document.createElement('p')
//  console.log(p)
 let div = document.querySelector('div')

  ele.innerText = "hello how are you"
  p.innerText = "kullu"
  console.log(p)
  console.log(ele)
  div.append(p)
  div.append(ele);
  // div.remove()
  p.remove()
  
