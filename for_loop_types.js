//for of loop

let string_val = "GoogMorning"

for(let i of string_val)
{
    console.log("character is==>",i)
}

// for in loop

const obj = {
    name : "Tonny",
    age : 30,
    salary :"50K"
}
for(let i in obj)
{
    console.log("key:",i, "Value :",obj[i])
}
