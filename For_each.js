let arr =[1, 2, 3, 4, 5]

arr.forEach(function myfun(val){
    console.log("Noo nedd to call argument type function, it calls automatically-----")
})

// or

arr.forEach((val) => {
    console.log("We can use arrow function also")
})

//or we can pass array index also
arr.forEach((val,index) =>{
    console.log(`we can use each array element ${val} with its index ${index}`)
})

//or we can pass array index and whole array
arr.forEach((val,index,arr) =>{
    console.log(`we can use each array element ${val} with its index ${index} and whole array ${arr}`)
})

//practice using forEach

const arr1 = [1,2,3,4,4]

arr1.forEach( (num) => {
    console.log(num*num)
})

//or
const a = [1,2,4]
const b = (num) =>{
    console.log("number square==>",num*num)
}
a.forEach(b)
