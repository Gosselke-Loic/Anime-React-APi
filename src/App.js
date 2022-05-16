import Home from "./webpages/Home";
import { DataProvider } from "./Context/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarSearch from "./components/Navbar";
import Characters from "./webpages/Characters";
import Recomendations from "./webpages/Recomendations";
import FooterBar from "./components/Footer";

function App() {

    return (
        <BrowserRouter>
            <div className="App pb-5">
                <DataProvider>
                    <NavbarSearch />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={ <Home /> }/>
                            <Route path="/Characters" element={ <Characters /> }/>
                            <Route path="/Recomendations" element={ <Recomendations /> } />
                        </Routes>
                    </div>
                    <FooterBar />
                </DataProvider> 
            </div>
        </BrowserRouter>
    );
}

export default App;