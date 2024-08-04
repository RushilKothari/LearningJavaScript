// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "DaBoi01"
tinderUser.name = "Rush"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rush@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rush",
            lastname: "codes"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js made Easy",
    price: "Free",
    courseInstructor: "Rush"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Rush",
//     "coursename": "Js in Hindi",
//     "price": "Free"
// }

// [
//     {},
//     {},
//     {}
// ]