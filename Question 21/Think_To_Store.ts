// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


let Student = {
    name: "Saad",
    age: 15,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
    job: "Software Engineer",
}

//define an array of objects containing these items:

let Students : Array<typeof Student> = [];

//Pushing More than one object:

Students.push(Student);

Students.push({name : "Maaz", age : 17 , gender : "Male" , city : "Karachi" , country : "Pakistan" , job : "Software Engineer" });

Students.push({name : "Saher", age : 19 , gender : "Female" , city : "Karachi" , country : "Pakistan" , job : "Software Engineer" });

Students.push({name : "Ayesha", age : 11 , gender : "Female" , city : "Karachi" , country : "Pakistan" , job : "Software Engineer" });

Students.push({name : "Anus", age : 8 , gender : "Male" , city : "Karachi" , country : "Pakistan" , job : "Software Engineer" });


function displayStudentsInformation (Students: Array<typeof Student>)
{
    for(let students of Students){
        console.log(`
        Title: ${students.name}
        Age: ${students.age}
        Gender: ${students.gender}
        City: ${students.city}
        Country: ${students.country}
        JOB: ${students.job}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        `)
}
}

displayStudentsInformation(Students);