const personOne = {
    name: "Bob",
    age: 21,
};

// внутри функции желательно не нужно
// менять внешний объект

// function increasePersonAge(obj) {
//     obj.age += 1;
// }


function increasePersonAge(obj) {
    const newObj = { ...obj };
    newObj.age += 1;
    return newObj;
}


const updatePersonOne = increasePersonAge(personOne);
console.log(`personeOne: ${personOne.age}`);
console.log(`updatePersoneOne: ${updatePersonOne.age}`);

function printMyName() {
    console.log("Den");
}

setTimeout(printMyName, 1000);


