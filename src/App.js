import logo from "./logo.svg";
import "./App.css";
import CoffeeShop from "./components/CoffeeShop/CoffeeShop";

function App() {
    return (
        <div className="App">
            <CoffeeShop items ={
                [
                {
                    name: "Espresso",
                    id: 1,
                    price: 2.70,
                },
                {
                    name: "Macchiato",
                    id: 2,
                    price: 3.40,
                },
                {
                    name: "Latte",
                    id: 3,
                    price: 3.30,
                },
                {
                    name: "Flat White",
                    id: 4,
                    price: 3.20,
                },
                {
                    name: "Cappucino",
                    id: 5,
                    price: 3.60,
                },
                {
                    name: "Mocha",
                    id: 6,
                    price: 3.90,
                },
                ]
            } />


        </div>
    );
}

export default App;
