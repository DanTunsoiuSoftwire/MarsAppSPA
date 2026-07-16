import './GenericTPPIComponent.css'

export default function GenericTPPIComponent(props : { title:string, firstParag:string, secondParag:string, image:string }) {
    return (
        <div>
            <h1> {props.title} </h1>
            <p> {props.firstParag} </p>
            <p> {props.secondParag} </p>
            <img src={props.image} className="image" alt="Nasa logo image." />
        </div>
    )
}
