import {createContext, useState} from "react";
import Component2 from "./Component2.tsx";
import Component3 from "./Component3.tsx";

export const CounterContext = createContext<any>(null);

export default function Component1() {
    const [counterValue, setCounterValue] = useState(0);

    function incrementOnClick(): void {
        setCounterValue(counterValue + 1);
    }

    return (
        <div>
            <CounterContext value={[counterValue, incrementOnClick]}>
                <Component2></Component2>
                <Component3></Component3>
            </CounterContext>
        </div>
    )
}