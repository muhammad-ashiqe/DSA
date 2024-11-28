//creating and accessing array  ----1

// let fruits=["apple","orange","banana","grapes"];
// console.log(fruits[1]);

// let arr = [1,2,3,4,5];
// console.log(arr.length);

//insertion of an array ------2

// let arr = [1,3,4,5];
// arr.unshift(9);
// console.log(arr);

// let arr =  [1,2,3,4];
// arr.push(2);
// console.log(arr);

// let arr=[1,2,3,4,5];
// arr.splice(1,0,10);
// console.log(arr);

//array deletion ---------------3

// let arr=[1,2,3,4];
// arr.shift();
// console.log(arr);

// let arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr)

// let arr = [1,2,3,4,5];
// arr.splice(0,3);
// console.log(arr)

//aray searching ------------------4

// let arr=[1,2,3,4,5];
// console.log(arr.includes(5));

// let arr=[1,2,3,4,5];
// console.log(arr.indexOf(4));

// let arr= [1,2,3,4,5,6];
// console.log(arr.find((num) =>num>3));

//update an array          -------------5
// let arr=[1,2,3,4,5];
// arr[0]=10;
// console.log(arr)

//array iterations ------------6

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr=[10,20,30,5];
// for(let i of arr){
//     console.log(i)
// }

// let arr=[1,12,23,45,68];
// arr.forEach((value,index)=>{
//     console.log(`index is ${index} : value is ${value}`)
// })

// let arr=[10,20,30,40,50];
// let maped =arr.map((item,index)=>{
//     console.log(item ,"with" ,index)
// })

// let arr=[10,20,30,40,50];
// let maped =arr.map(num=> num * num )
// console.log(maped)

// let arr=[11,20,33,40];
// let even = arr.filter((num)=>num % 2 == 0)
// console.log(even)

// let arr=[1,2,3,4];
// let sum = arr.reduce((acc,num)=>acc+num,0)
// console.log(sum)