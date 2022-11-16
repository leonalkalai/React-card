const Card = (props)=> {
    return(
      <div className="cardwrapper">
        <p>{props.name}</p>
        <p>{props.age}</p>
      </div>
)};

export default Card;