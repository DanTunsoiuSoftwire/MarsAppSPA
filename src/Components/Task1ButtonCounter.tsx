import {useState} from "react";

export default function Task1ButtonCounter() {
    const [buttonCounter, setButtonCounter] = useState(0);

    function increaseButtonPresses(): void {
        setButtonCounter(buttonCounter + 1);
    }

    return (
        <button
            type="button"
            className="counter"
            onClick={() => increaseButtonPresses()}
        >
            Count is {buttonCounter}
        </button>
    )
}
