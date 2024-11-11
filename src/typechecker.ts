import {Coordinate} from "./coordinate" 

// Function to check if value is a coordinate or not:
  function isCoordinate<T, U>(value: any): value is Coordinate<T, U> {
    return (
      Array.isArray(value) &&
      value.length === 2 &&
      (typeof value[0] === typeof (undefined as T) || value[0] === value[0]) &&
      (typeof value[1] === typeof (undefined as U) || value[1] === value[1])
    );
  }

// Function to check if two coordinates are equal or not:
function coordinatesEqual<T,V>(a: Coordinate<T,V>, b: Coordinate<T,V>): boolean{
    if(!isCoordinate(a) || !isCoordinate(b)){
        throw console.error("Parameters must be Coordinates.");
    }
    return a[0] === b[0] && a[1] === b[1];
}

function setValuesEqual<T>(a: Set<T>, b: Set<T>): boolean{
    return a === b;
}

export {isCoordinate, coordinatesEqual};