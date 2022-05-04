import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/SinglePage.jsx';
import './app.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
 

const App = () => {
  const [data, setData] = useState([])
  const [selectedRecipeId, setSelectedRecipeId] = useState("")
  const [isModalOpen, setIsModalToOpen] = useState(false)
  const [shouldUpdate, setUpdate] = useState(false)


  // desio samo jednom kada se komponenta "uzjahala"
  useEffect(() => {
    fetch('https://6245a3482cfed18817248397.mockapi.io/recipes')
    .then((res)=>res.json())
    .then((response)=> setData(response))
  }, [shouldUpdate])
  
  const setShouldUpdate = () => {
    setUpdate(!shouldUpdate)
  }

  const setSelectedRecipe = (xxx) => {
    setSelectedRecipeId(xxx)
  }

  const setModal = (modalState) => {
    setIsModalToOpen(modalState)
  }


    return ( 
        <div>
            
            {isModalOpen && <Modal setModal={setModal} setFetch={setShouldUpdate}/>}
            <Header setModalToOpen={setModal}/>
          <Routes>
            <Route path='/home' element={<HomePage setShouldUpdate={setShouldUpdate} recipes={data} setSelectedRecipe={setSelectedRecipe}/>}>
              
            </Route>
            <Route path='/single-recipe/:id' element={<SinglePage setSelectedRecipe={setSelectedRecipe} recipe={data.find(e=>e.id === selectedRecipeId)}/>}>
              
            </Route>
          </Routes>
            <Footer/>
          
        </div>
     );
}
 
export default App;