
// 1. Filter  method

// function Filter(arr, CheckFn){

//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         if(CheckFn(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }


// let arr = Filter([1,2,3,4,5,6], function(num){
//     return num > 2;
// })

// console.log(arr);






// 2. Every  method

// function Every(arr, CheckdFn){
//     let iscorrect = true;

//     for (let i = 0; i < arr.length; i++) {
//         if(!CheckdFn(arr[i])){
//             iscorrect = false;
//             break;
//         }
//     }

//     return iscorrect;


// }

// let arr = Every([1,4,5,6,7,8], function(num){
//     return num > 0;
// })

// console.log(arr);







// 3. Some method


// function Some(arr, CheckFn){

//     let iscorrect = false;

//     for(let i = 0; i < arr.length; i++){
//         if(CheckFn(arr[i])){
//             iscorrect = true;
//             break;
//         }
//     }

//     return iscorrect;

// }

// let arr = Some([1,2,3,4,5], function(num){
//     return num > 4;
// })

// console.log(arr);








// 4. Reduce method

// function Reduce(arr, CheckdFn){
//     let result = 0;

//     for(let i = 0; i < arr.length; i++){
//         result +=arr[i];
//     }

//     return result;

// }

// let arr = Reduce([100,200,300,400,500], function(accul,CuurentVal){
//     return accul + CuurentVal;
// },0)
 

// console.log(arr);









// 5. Find method

// function Find(arr, CheckdFn){

//     for(let i = 0; i < arr.length; i++){
//         if(CheckdFn(arr[i])){
//             return arr[i];
//         }
//     }

// }

// let arr = Find([10,20,30,40,50], function(num){
//     return num > 20;
// })

// console.log(arr);








// 6. Includes method

// function Includes(arr, CheckFn){

//     let checkval = false;

//     for(let i = 0; i < arr.length; i++){
//         if(CheckFn(arr[i])){
//             checkval = true;
//             break;
//         }
//     }

//     return checkval;
    
// }

// let arr = Includes(["Ilkin","Vuqar","Cefer","Kenan"], function(num, checknm = "Ilkin"){
//     return num == checknm;
// })

// console.log(arr);









// 7. Sorting method


// function Sorting(arr, CheckdFn){
//     let newArr = [];

//     for(let i = arr.length - 1; i >= 0; i--){
//         if(CheckdFn(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }


// let arr = Sorting(["March","Jan","Feb","Dec"], function(num){
//     return num;
// }
// )

// console.log(arr);