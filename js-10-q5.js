/*
 ? look at the code below:
 todo: 1. create an object which has three properties. 
 todo: 2. use "for in" to show below result: 
 -Mike is tall, 
 -Jake is kind, 
 -Lilly is young 
 structure: ({key} is {value})
*/

/**Write your code below  */
const animals = {
    Leo: "brave",
    Bella: "friendly",
    Max: "playful"
};

for (const key in animals) {
    if (animals.hasOwnProperty(key)) { 
        console.log(`${key} is ${animals[key]}`); 
    }
}