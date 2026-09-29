// var a= 5

// {
//     let a=8
//     console.log(a);
    
// }
// console.log(a);


/*



//                                faulty calculator
let a=10
let b=5
let ans;
// let operation = "/"
let check = Math.random();
let operation ="*"
switch(operation){
case "+": if(check<0.1){
          ans = a*b
          console.log(ans);
          console.log("multi");
          break;
        }
 else {
    ans = a+b;
    console.log(ans);
 console.log("add");
 break;
 }

 case "-": if(check<0.1){
          ans = a/b
          console.log(ans);
           console.log("divide");
           break;
        }
 else {
    ans = a-b;
    console.log(ans);
     console.log("sub");
     break;
 }

 case "*": if(check<0.1){
          ans = a+b
          console.log(ans);
           console.log("addition");
           break;
        }
 else {
    ans = a*b;
    console.log(ans);
     console.log("multi");
     break;
 }
 case "/": if(check<0.1){
          ans = a-b
          console.log(ans);
           console.log("sub");
           break;
        }
       else {
    ans = a/b;
    console.log(ans);
     console.log("divide");
     break;
 }
}



*/

// console.log(ans);


// if(operation == "+" && check<0.1){
//     ans = a*b
// }
// else{
//     ans = a+b;
// }

// else if(operation =="-"){
//     ans = a/b;
// }
// else if(operation == "*"){
// ans = a+b;
// }
// else if(operation =="/"){
//     ans = a-b;
// }

// else {
//     console.log("not matched");
    
// }

// console.log(ans);


// let a=prompt("enter the first number")
// let operation= prompt("enter the operation")
// let b= prompt("enter the second number")
// let ans;


// // let operation = "/"
// let check = Math.random();
// // let operation ="*"
// switch(operation){
// case "+": if(check<0.1){
//           ans = parseInt(a*b);
//           console.log(ans);
//           console.log("multi");
//           break;
//         }
//  else {
//     ans = parseInt(a) + parseInt(b);
//     console.log(ans);
//  console.log("add");
//  break;
//  }

//  case "-": if(check<0.1){
//           ans = a/b
//           console.log(ans);
//            console.log("divide");
//            break;
//         }
//  else {
//     ans = a-b;
//     console.log(ans);
//      console.log("sub");
//      break;
//  }

//  case "*": if(check<0.1){
//           ans = a+b
//           console.log(ans);
//            console.log("addition");
//            break;
//         }
//  else {
//     ans = a*b;
//     console.log(ans);
//      console.log("multi");
//      break;
//  }
//  case "/": if(check<0.1){
//           ans = a-b
//           console.log(ans);
//            console.log("sub");
//            break;
//         }
//        else {
//     ans = a/b;
//     console.log(ans);
//      console.log("divide");
//      break;
//  }
// }


let a=prompt("enter the first number")
let operation= prompt("enter the operation")
let b= prompt("enter the second number")
let ans;


let obj = { 
   "+": "-",
   "*": "+",
   "-": "/",
   "/": "**",
}

if(Math.random()>0.1){

   alert(`The result is ${ eval(`${a} ${operation} ${b}`) } `)
}
 else{
   operation= obj[operation]
      alert(`The result is ${ eval(`${a} ${operation} ${b}`) } `)
 }


