import {useContext} from "react";
import {CounterContext} from "./Component1.tsx";

export default function Component4() {
    return (
        <p> This is the counter: {useContext(CounterContext)[0]} </p>
    )
}