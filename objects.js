//objects

const student = {
    name : "Neha",
    age : 30,
    cgpa : 10,
    isPass : true
}
console.log("Initial object : ",student)
console.log(student['name'])
//or
console.log(student.name)

student.age = student.age + 1
console.log(student.age)
student["name"] = "Tom"
console.log(student["name"])

console.log("Changed Object : ",student)
