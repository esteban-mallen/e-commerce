import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemViewContainer from "./components/ItemViewContainer/ItemViewContainer.jsx";
import CartContextProvider from "./context/cartContext.jsx";
import CartViewContainer from "./components/CartViewContainer/CartViewContainer.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import OrderView from "./components/OrderView/OrderView.jsx";

const APP_NAME = "Steve's flower shop"

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar>{APP_NAME}</NavBar>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='*' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemViewContainer/>}/>
                        <Route path='/cart' element={<CartViewContainer/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/order' element={<OrderView/>}/>
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App
