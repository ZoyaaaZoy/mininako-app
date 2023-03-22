import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Bouquet from "./components/bouquet/Bouquet";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <Bouquet />
            </main>
        </>
    );
}

export default App;
