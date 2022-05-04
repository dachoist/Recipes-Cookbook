import React from "react";
import "./home-page.css";
import Card from "../../components/Card/Card.jsx";

const HomePage = (props) => {

    return (
      <div className="home-page">
        {/* <Header /> */}
          <h3>Jela koja se lako pripremaju</h3>
          <div>
            {/* filter = [{ meal : quinoa salad, level : 1 }] */}
            {/* [{ meal : quinoa salad, level : 1 }].map(e=> <Card/>) */}
            {props.recipes.filter(e=>e.level<=2).map(e=><Card setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
          </div>
        <h3>Jela koja se srednje tesko pripremaju</h3>
        <div>
            {props.recipes.filter(e=>e.level<=4 && e.level>2).map(e=><Card setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
          </div>
        <h3>Jela koja se tesko pripremaju</h3>
        <div>
            {props.recipes.filter(e=>e.level===5).map(e=><Card setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
          </div>
        {/* <Footer /> */}
      </div>
    );
}

export default HomePage;
