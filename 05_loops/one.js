// For Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i === 5) {
//         console.log("5 is best answer...");
//     }
//     console.log(element);
    
// }


// Nested for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
//     }
    
// }


// Break Statement

for (let index = 0; index <= 20; index++) {
    if (index === 5) {
        console.log("5 detected");
        break
    }
    const element = index;
    console.log(index)
    
}

// Continue Statement

for (let index = 0; index <= 20; index++) {
    if (index === 5) {
        console.log("5 detected");
        continue
    }
    const element = index;
    console.log(index)
    
}