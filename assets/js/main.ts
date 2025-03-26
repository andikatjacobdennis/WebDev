// Simple test to verify the script loaded
console.log("Main JS loaded");

// 1. Class Inheritance Demo
function demoInheritance(): void {
  class Animal {
    constructor(public name: string) {}

    speak(): string {
      return `${this.name} makes a noise.`;
    }
  }

  class Dog extends Animal {
    speak(): string {
      return `${this.name} barks.`;
    }
  }

  const dog = new Dog("Rex");
  document.getElementById("inheritanceResult")!.innerText = dog.speak();
}

// 2. Closure Demo
function demoClosure(): void {
  function makeCounter(): () => number {
    let count = 0;
    return function (): number {
      count++;
      return count;
    };
  }

  const counter = makeCounter();
  document.getElementById(
    "closureResult"
  )!.innerText = `Counter: ${counter()}, ${counter()}, ${counter()}`;
}

// 3. Async/Await Demo
function demoAsync(): void {
  const simulateAsyncOperation = (): Promise<string> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.2
          ? resolve("Async operation succeeded!")
          : reject("Async operation failed!");
      }, 1000);
    });

  simulateAsyncOperation()
    .then(
      (result) => (document.getElementById("asyncResult")!.innerText = result)
    )
    .catch(
      (error) => (document.getElementById("asyncResult")!.innerText = error)
    );
}

// 4. Promise.all Demo
function demoPromiseAll(): void {
  const promise1 = Promise.resolve("First promise resolved!");
  const promise2 = new Promise<string>((resolve) =>
    setTimeout(resolve, 1000, "Second promise resolved!")
  );

  Promise.all([promise1, promise2]).then(
    (results) =>
      (document.getElementById("promiseAllResult")!.innerText =
        results.join(" "))
  );
}

// 5. Pure Function Demo
function demoPureFunction(): void {
  function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(5, 3);
  document.getElementById(
    "pureFunctionResult"
  )!.innerText = `Result of add(5,3): ${result}`;
}

// 6. Function Composition Demo
function demoComposition(): void {
  const double = (x: number): number => x * 2;
  const square = (x: number): number => x * x;

  const compose =
    (f: (x: number) => number, g: (x: number) => number) => (x: number) =>
      f(g(x));

  const result = compose(double, square)(3); // double(square(3))
  document.getElementById(
    "compositionResult"
  )!.innerText = `Result of composition: ${result}`;
}

// 7. Immutability Demo
function demoImmutability(): void {
  const originalArray: number[] = [1, 2, 3];

  // Using spread operator to create a new array
  const newArray = [...originalArray, 4];

  document.getElementById(
    "immutabilityResult"
  )!.innerText = `Original: ${originalArray}, New: ${newArray}`;
}

// 8. Singleton Demo
interface ISingletonInstance {
  name: string;
}

const Singleton = (function () {
  let instance: ISingletonInstance;

  function createInstance(): ISingletonInstance {
    return { name: "I am the instance" };
  }

  return {
    getInstance: function (): ISingletonInstance {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function demoSingleton(): void {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  document.getElementById("singletonResult")!.innerText =
    instance1 === instance2 ? "Singleton works!" : "Singleton failed!";
}

// 9. Factory Demo
function demoFactory(): void {
  interface ICar {
    make: string;
    model: string;
  }

  class Car implements ICar {
    constructor(public make: string, public model: string) {}
  }

  function CarFactory(make: string, model: string): ICar {
    return new Car(make, model);
  }

  const myCar = CarFactory("Toyota", "Corolla");

  document.getElementById(
    "factoryResult"
  )!.innerText = `Created car: ${myCar.make} ${myCar.model}`;
}

// 10. Observer Demo
function demoObserver(): void {
  type Observer<T> = (data: T) => void;

  class Subject<T> {
    private observers: Observer<T>[] = [];

    subscribe(observer: Observer<T>): void {
      this.observers.push(observer);
    }

    notify(data: T): void {
      this.observers.forEach((observer) => observer(data));
    }
  }

  const subject = new Subject<string>();

  subject.subscribe(
    (data) =>
      (document.getElementById(
        "observerResult"
      )!.innerText += `Observer notified with data: ${data}\n`)
  );

  subject.notify("New data available!");
}

// 11. Performance Optimization - Memoization Demo
const memoizeFactorial = (function () {
  const cache: Record<number, number> = {};

  return function factorial(n: number): number {
    if (n in cache) return cache[n];

    if (n <= 1) return 1;

    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
})();

function demoMemoization(): void {
  const result1 = memoizeFactorial(5);

  document.getElementById(
    "memoizationResult"
  )!.innerText = `Factorial of 5 (memoized): ${result1}`;
}

// 12. Debouncing implementation
let debounceTimeout: number;

document.getElementById("debounceButton")!.addEventListener("click", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    document.getElementById("debounceResult")!.innerText += "Button clicked!\n";
  }, 500);
});

// 13. Error Handling Demo
function demoErrorHandling(isValid: boolean): void {
  try {
    if (!isValid) throw new Error("Invalid input provided");
    document.getElementById("errorHandlingResult")!.innerText =
      "Input is valid!";
  } catch (error) {
    if (error instanceof Error) {
      document.getElementById("errorHandlingResult")!.innerText = error.message;
    }
  }
}

// 14. Modern JavaScript Features Demo
function demoModernFeatures(): void {
  interface NestedObject {
    a?: {
      b?: {
        c?: string;
      };
    };
    x?: {
      y?: {
        z?: string;
      };
    };
  }

  const obj: NestedObject = { a: { b: { c: "Hello" } } };
  const result1 = obj.a?.b?.c ?? "Default Value";
  const result2 = obj.x?.y?.z ?? "Default Value";

  document.getElementById(
    "modernFeaturesResult"
  )!.innerText = `Optional Chaining Result: ${result1}, Nullish Coalescing Result: ${result2}`;
}
