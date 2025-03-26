"use strict";
// Simple test to verify the script loaded
console.log("Main TS loaded");
// 1. Class Inheritance Demo
function demoInheritance() {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            return `${this.name} makes a noise.`;
        }
    }
    class Dog extends Animal {
        speak() {
            return `${this.name} barks.`;
        }
    }
    const dog = new Dog("Rex");
    document.getElementById("inheritanceResult").innerText = dog.speak();
}
// 2. Closure Demo
function demoClosure() {
    function makeCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    const counter = makeCounter();
    document.getElementById("closureResult").innerText = `Counter: ${counter()}, ${counter()}, ${counter()}`;
}
// 3. Async/Await Demo
function demoAsync() {
    const simulateAsyncOperation = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2
                ? resolve("Async operation succeeded!")
                : reject("Async operation failed!");
        }, 1000);
    });
    simulateAsyncOperation()
        .then((result) => (document.getElementById("asyncResult").innerText = result))
        .catch((error) => (document.getElementById("asyncResult").innerText = error));
}
// 4. Promise.all Demo
function demoPromiseAll() {
    const promise1 = Promise.resolve("First promise resolved!");
    const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second promise resolved!"));
    Promise.all([promise1, promise2]).then((results) => (document.getElementById("promiseAllResult").innerText =
        results.join(" ")));
}
// 5. Pure Function Demo
function demoPureFunction() {
    function add(a, b) {
        return a + b;
    }
    const result = add(5, 3);
    document.getElementById("pureFunctionResult").innerText = `Result of add(5,3): ${result}`;
}
// 6. Function Composition Demo
function demoComposition() {
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const compose = (f, g) => (x) => f(g(x));
    const result = compose(double, square)(3); // double(square(3))
    document.getElementById("compositionResult").innerText = `Result of composition: ${result}`;
}
// 7. Immutability Demo
function demoImmutability() {
    const originalArray = [1, 2, 3];
    // Using spread operator to create a new array
    const newArray = [...originalArray, 4];
    document.getElementById("immutabilityResult").innerText = `Original: ${originalArray}, New: ${newArray}`;
}
const Singleton = (function () {
    let instance;
    function createInstance() {
        return { name: "I am the instance" };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
function demoSingleton() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    document.getElementById("singletonResult").innerText =
        instance1 === instance2 ? "Singleton works!" : "Singleton failed!";
}
// 9. Factory Demo
function demoFactory() {
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
    }
    function CarFactory(make, model) {
        return new Car(make, model);
    }
    const myCar = CarFactory("Toyota", "Corolla");
    document.getElementById("factoryResult").innerText = `Created car: ${myCar.make} ${myCar.model}`;
}
// 10. Observer Demo
function demoObserver() {
    class Subject {
        constructor() {
            this.observers = [];
        }
        subscribe(observer) {
            this.observers.push(observer);
        }
        notify(data) {
            this.observers.forEach((observer) => observer(data));
        }
    }
    const subject = new Subject();
    subject.subscribe((data) => (document.getElementById("observerResult").innerText += `Observer notified with data: ${data}\n`));
    subject.notify("New data available!");
}
// Performance Optimization - Memoization Demo
const memoizeFactorial = (function () {
    const cache = {};
    return function factorial(n) {
        if (n in cache)
            return cache[n];
        if (n <= 1)
            return 1;
        cache[n] = n * factorial(n - 1);
        return cache[n];
    };
})();
function demoMemoization() {
    const result1 = memoizeFactorial(5);
    document.getElementById("memoizationResult").innerText = `Factorial of 5 (memoized): ${result1}`;
}
// Debouncing implementation
let debounceTimeout;
document.getElementById("debounceButton").addEventListener("click", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        document.getElementById("debounceResult").innerText += "Button clicked!\n";
    }, 500);
});
// Error Handling Demo
function demoErrorHandling(isValid) {
    try {
        if (!isValid)
            throw new Error("Invalid input provided");
        document.getElementById("errorHandlingResult").innerText =
            "Input is valid!";
    }
    catch (error) {
        if (error instanceof Error) {
            document.getElementById("errorHandlingResult").innerText = error.message;
        }
    }
}
// Modern JavaScript Features Demo
function demoModernFeatures() {
    var _a, _b, _c, _d, _e, _f;
    const obj = { a: { b: { c: "Hello" } } };
    const result1 = (_c = (_b = (_a = obj.a) === null || _a === void 0 ? void 0 : _a.b) === null || _b === void 0 ? void 0 : _b.c) !== null && _c !== void 0 ? _c : "Default Value";
    const result2 = (_f = (_e = (_d = obj.x) === null || _d === void 0 ? void 0 : _d.y) === null || _e === void 0 ? void 0 : _e.z) !== null && _f !== void 0 ? _f : "Default Value";
    document.getElementById("modernFeaturesResult").innerText = `Optional Chaining Result: ${result1}, Nullish Coalescing Result: ${result2}`;
}
