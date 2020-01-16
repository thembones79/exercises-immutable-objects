/*
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
*/

let airplane = {
  altitude: 1200,
  airspeed: 120,
  position: {
    latitude: 72,
    longitude: 42
  },
  plannedRoute: ["KBOS", "KBED", "KORH"],
  seats: {
    0: {
      name: "Dave"
    },
    1: null,
    2: null,
    3: null
  }
};

/*
function reducer(state = airplane, action) {
  switch (action.type) {
    case "one":
      return state;
    default:
      return state;
  }
}
*/

// start

console.log({ ex0: airplane });

// exercise 1

airplane = {
  ...airplane,
  altitude: 1300
};

console.log({ ex1: airplane });

// exercise 2

airplane = {
  ...airplane,
  position: { ...airplane.position, latitude: 73 }
};

console.log({ ex2: airplane });

// exercise 3

airplane = {
  ...airplane,
  seats: {
    ...airplane.seats,
    1: {
      name: "Dave"
    }
  }
};

console.log({ ex3: airplane });

// exercise 4

airplane = {
  ...airplane,
  seats: {
    ...airplane.seats,
    0: {
      name: "Lynne"
    }
  }
};

console.log({ ex4: airplane });
console.log(airplane.seats);

// exercise 5

airplane = {
  ...airplane,
  plannedRoute: [...airplane.plannedRoute, "KAFN"]
};

console.log({ ex5: airplane });

// exercise 6

airplane = {
  ...airplane,
  plannedRoute: []
};

console.log({ ex6: airplane });
