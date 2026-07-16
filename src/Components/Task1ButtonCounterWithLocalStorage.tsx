import {useEffect, useState} from "react";

export default function Task1ButtonCounterWithLocalStorage() {
    const [buttonPresses, setButtonPresses] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("buttonPresses") != null) {
            setButtonPresses(parseInt(localStorage.getItem("buttonPresses") as string));
        }
    } , []);

    function increaseButtonPresses(): void {
        setButtonPresses(buttonPresses + 1);
        localStorage.setItem("buttonPresses", "" + (buttonPresses + 1));
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
