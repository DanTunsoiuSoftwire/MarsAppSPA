import {CounterContext} from "./Component1.tsx";
import {useContext} from "react";

export default function Component2() {
    const updateCounter = useContext(CounterContext)[1];

    return (
        <button
            type="button"
            className="counter"
            onClick={() => {updateCounter()}}
        >
            This is the button for the counter!
        </button>
    )
}