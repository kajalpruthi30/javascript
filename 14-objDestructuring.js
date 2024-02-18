const course = {
    courseName : "Javascript",
    courseId : "a1b2c3",
    courseInstructor: "Hitesh Chaudhary"
}


// Instead of console.log(course.courseIntructor)

// Destructure - (syntactic sugar)the same
const {courseName, courseId, courseInstructor: instructor} = course


console.log(courseName)
console.log(courseId)
console.log(instructor)


// React destructing of props
// function = (props.courseName) => {}
// function = ({courseName}) => {}




// API can be in form

{
//    a : "Javascript",
//    b : "a1b2c3",
//    c : "Hitesh Chaudhary"
}

// [{}, {}]

// json formatter to format the Api's