


// const createCopy = (obj) => {
//     let clone = {}; 
//     for (let key in obj) {
//         clone[key] = obj[key];
//     } 
//     return clone;
// };

// const cat = {
//     color: 'black',
//     yearsOld: '1',
//     character: "good",
// }
// const pet = createCopyPicture(cat);
// console.log(pet, createCopyPicture(cat));

const sum = (a, b) => a + b;
const length = (object) => {
    let keysAmount = 0;
    for (const key in object) {
    if (object.hasOwnProperty(key)) {
        keysAmount++;
    }
    }
    return keysAmount;  
  };  

const copy = (object) => {
    const newObj = {};
    for (const key in object)  {
            const element = object[key];
            newObj[key] = element;
    }
    return newObj;
};

const cave = {
    a: {
        a: 1,
        b: false,
    },
    b: {
        a: false,
        b: false,
    },
};
const deepCopy = (object) => {
    const newObj = {};
    for (const key in object)  {
        const element = object[key];
        if(element !== null && typeof element === 'object' ) {
            newObj[key] = deepCopy(element);
        } else {
           newObj[key] = element; 
        }
    }
    return newObj;
};

const newCave = copy(cave);

cave.a.a = 'abc';
console.log(newCave.a.a === cave.a.a);
