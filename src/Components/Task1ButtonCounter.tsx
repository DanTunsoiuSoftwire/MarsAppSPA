import {useState} from "react";

export default function Task1ButtonCounter() {
    const [buttonPresses, setButtonPresses] = useState(0);

    function increaseButtonPresses(): void {
        setButtonPresses(buttonPresses + 1);
    }

    return (
        <button
            type="button"
            className="counter"
            onClick={() => increaseButtonPresses()}
        >
            Count is {buttonPresses}
        </button>
    )
}