import React from 'react'
import './single-page.css'

const SinglePage = (props) => {
    return ( 
      <>
        {/* <Header/> */}
        <div className="single-page">
          <button onClick={()=>props.setSelectedRecipe('')}>Back to home</button>
          <h3>{props.recipe.meal}</h3>
          <img src={props.recipe.image} alt="meal" />
          <p>Prep time : {props.recipe.prepTime}</p>
          <p>Level : {props.recipe.level}</p>
          <ul>
            Ingredients: 
            {props.recipe.ingredients.map(e => <li>{e}</li>)}
          </ul>
          <p>Country of origin : {props.recipe.countryOfOrigin}</p>
        </div>
        {/* <Footer/> */}
      </>
     );
}
 
export default SinglePage;