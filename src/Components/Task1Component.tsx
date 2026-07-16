import nasaLogo from "../assets/NasaLogo.png";
import GenericTask1Component from "./GenericTask1Component.tsx";

export default function Task1Component() {
    return (
        <GenericTask1Component title="Nasa Information" firstParag="This is the first paragraph!"
                               secondParag="This is the second paragraph!" image={nasaLogo} />
    )
}