import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

const APP_NAME = "Steve's flower shop"
const categories = ["Flowers", "Bouquets", "Plants"]

function App() {
    return (
        <>
            <NavBar categories={categories}>{APP_NAME}</NavBar>
            <ItemListContainer text={"This is the item list..."}/>
        </>
    )
}

export default App
