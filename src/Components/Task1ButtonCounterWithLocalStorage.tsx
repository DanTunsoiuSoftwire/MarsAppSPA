import {useEffect, useState} from "react";

export default function Task1ButtonCounterWithLocalStorage() {
    const [buttonCounter, setButtonCounter] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("buttonPresses") != null) {
            setButtonCounter(parseInt(localStorage.getItem("buttonPresses") as string));
        }
    } , []);

    useEffect(() => {
        if (buttonCounter != 0) {
            localStorage.setItem("buttonPresses", "" + buttonCounter);
        }
    }, [buttonCounter])

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
