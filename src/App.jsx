import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemViewContainer from "./components/ItemViewContainer/ItemViewContainer.jsx";

const APP_NAME = "Steve's flower shop"

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar>{APP_NAME}</NavBar>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='*' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemViewContainer/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
