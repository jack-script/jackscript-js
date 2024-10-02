import { JackscriptSet } from "./functions";

type Coordinate<T, V> = [T, V];

type Relation<T, V> = JackscriptSet<Coordinate<T, V>> | JackscriptSet<T>;

function isCoordinateSet<T, V>(relation: Relation<T, V>): relation is JackscriptSet<Coordinate<T, V>> {
    if (relation.size === 0) {
        return false; // Empty set, can't determine
    }
    const firstItem = relation.values().next().value;
    return Array.isArray(firstItem) && firstItem.length === 2;
}

function checkRelationType<T, V>(relation: Relation<T, V>): string {
    if (isCoordinateSet(relation)) {
        return "JackscriptSet of Coordinates";
    } else {
        return "JackscriptSet of T";
    }
}

export {Coordinate, Relation, isCoordinateSet, checkRelationType};

