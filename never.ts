//Never keyword

// Function that never returns
function throwError(message: string): never {
    throw new Error(message);
}

// Function with infinite loop
function infiniteLoop(): never {
    while (true) {
        console.log('This will never end');
    }
}

// Type guard that validates exhaustiveness
type Shape = 'circle' | 'square';
function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}

function processShape(shape: Shape) {
    switch (shape) {
        case 'circle':
            console.log('Processing circle');
            break;
        case 'square':
            console.log('Processing square');
            break;
        default:
            assertNever(shape); // Type checking ensures all cases are handled
    }
}