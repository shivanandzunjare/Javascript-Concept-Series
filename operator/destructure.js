const course = { 
    courseName : " JS in Hindi",
    price : 99,
    CourseInstructor : "Vishal",
}

const {CourseInstructor} = course;
console.log(CourseInstructor);

const { CourseInstructor : instructor} = course
console.log(instructor)

//destructuring in react

const navbar= ({name, age}) => {
    console.log(`Hello my name  is ${name} and I ${age}years old`)  ;
}
navbar({name : "Shiva", age : 25});


//for array
const numbers = [10, 20, 30];

// destructuring
const [a, b] = numbers;
console.log(a); // 10
console.log(b); // 20

function loginUser(username = "Abhi") {
    return `${username} just logged in`;
}
console.log(loginUser("vishal"))