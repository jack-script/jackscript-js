import { JackscriptSet } from "./functions";

type Coordinate<T, V> = [T, V];

type Relation<T, V> = JackscriptSet<Coordinate<T, V>> | JackscriptSet<T>;

export {Coordinate, Relation};

