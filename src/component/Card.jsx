function Card(props){
    // const name="Atom";
    const handleClick = (name, title) =>{
        alert(`You have clicked the ${name} ${title}`)
    }
    return(
        <div className="border-red-600 bg-amber-600 border-4 w-fit text-center p-[30px] rouded-2x1">
            <img className="size-12 m-auto" src={props.imageUrl} alt="" />
            <h1>{props.header}</h1>
            <p>
                {props.title}
            </p>
        {/* <button onClick={()=> alert(`You have clicked the ${props.header}`)} className="bg-red-600 px-3 py-3 rounded-4xl">Book Vacation</button> */}
        <button onClick={()=> handleClick(props.header, props.title)} className="bg-red-600 px-3 py-3 rounded-4xl">Book Vacation</button>
        
        </div>
    )
}
export default Card;