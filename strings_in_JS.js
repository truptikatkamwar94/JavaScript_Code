//Strings methods

let s = "Pune"
let t = "Mumbai"
console.log("Length of first string==>",s.length)
console.log("Lenght of 2nd string==>",t.length)
console.log(s[2])

//Template literals

const obj = {
    name :"Tonny",
    marks :100
}

const output = `Name is ${obj.name} and marks is ${obj.marks}`
console.log("Template literals use is :",output)

// String Methods

let str1 = "             Hello Pune "
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log("Trim method===>",str1.trim())
let s1 ="abcadeafagh"
let s2 = "xyz"
console.log(s1.concat(s2))
console.log(s1.slice(2,5))
console.log(s1.replace('a',"T"))
console.log(s1.replaceAll('a','T'))

s="mndd"
s[2]='c'//not work[immutable]
console.log(s)
