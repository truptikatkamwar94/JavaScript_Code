let marks = [10, 12, 13, 15, 34]
console.log(marks)
console.log(marks.length)//property
console.log(marks[1])
marks[3]=1000//mutable
console.log(marks)

let array_of_string =['pune', 'mumbai', 'solapur']

for(let i=0; i<array_of_string.length; i++)
{
    console.log("Array elements are====>",array_of_string[i])
}

for(let i of array_of_string){
    console.log(i)
}

for(let i in array_of_string)
{
    console.log(array_of_string[i])
}

//Array methods
let array_items =[1,2,3,45,5]
array_items.push(300)
console.log(array_items)
deleted_item = array_items.pop()
console.log(deleted_item)
console.log(array_items.toString())

//concatenation
a=[1,2,3,4]
b=[10,20,30,40]
c=a.concat(b)
console.log(c)

//unshift and shift

let arr1 = [1,2,3,4]
let arr2 = [9,8,7,6]
let result1 = arr1.unshift(100)
console.log(`unshift is ${result1} and modified array is ${arr1}`)

let result2 =arr2.shift()
console.log("shift ==>",result2)
console.log(`shift is ${result2} and modified array is ${arr2}`)

//slice and spice method

let a1 = [11,12,13,4,13,45,4,445,45,34,3434]
a1.slice(2)
a1.splice(2,2,111,222)
a1.splice(2,0,100,200)
