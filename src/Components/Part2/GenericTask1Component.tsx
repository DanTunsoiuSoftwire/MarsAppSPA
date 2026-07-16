export default function GenericTask1Component(props : any) {
    return (
        <div>
            <h1> {props.title} </h1>
            <p> {props.firstParag} </p>
            <p> {props.secondParag} </p>
            <img src={props.image} className="base" width="200" height="200" alt="" />
        </div>
    )
}
