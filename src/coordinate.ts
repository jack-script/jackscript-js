import { JackscriptSet } from "./functions";

type Coordinate<T, V> = [T, V];


type Relation<T,V> = JackscriptSet<Coordinate<T, V>>;


export {Coordinate, Relation};

