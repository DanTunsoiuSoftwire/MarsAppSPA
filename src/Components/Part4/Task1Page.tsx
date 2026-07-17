import Task1Component from "../Part2/Task1Component.tsx";
import Task1ButtonCounter from "../Part2/Task1ButtonCounter.tsx";
import Task1ButtonCounterWithLocalStorage from "../Part2/Task1ButtonCounterWithLocalStorage.tsx";

export default function Task1Page() {
    return (
        <section id="center">
            <Task1Component></Task1Component>
            <Task1ButtonCounter></Task1ButtonCounter>
            <Task1ButtonCounterWithLocalStorage></Task1ButtonCounterWithLocalStorage>
        </section>
    );
}