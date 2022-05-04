import React from 'react';
import './card.css'

const Card = (props) => {

  const deleteRecipe = () => {
    fetch(`https://6245a3482cfed18817248397.mockapi.io/recipes/${props.obj.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((res)=>res.json())
    .then(res=>props.setShouldUpdate())
  }

// console.log(this.props.obj)
    return ( 
      <div className="card" onClick={()=>props.setSelectedRecipe(props.obj.id)}>
          <img src={props.obj.image} alt="meal" />
          <h3>{props.obj.meal}</h3>
          <button className="deleteRecipe" onClick={(e)=>{
            e.stopPropagation()
            deleteRecipe()
            }}>X</button>
      </div>
    );
}
 
export default Card;
