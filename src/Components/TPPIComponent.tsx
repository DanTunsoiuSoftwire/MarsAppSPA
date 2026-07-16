import nasaLogo from "../assets/NasaLogo.png";
import GenericTPPIComponent from "./GenericTPPIComponent.tsx";

export default function TPPIComponent() {
    return (
        <GenericTPPIComponent title="Nasa Information" firstParag="This is the first paragraph!"
                              secondParag="This is the second paragraph!" image={nasaLogo} />
    )
}
