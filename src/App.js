import Container from "@mui/material/Container";
import BioHeader from "./components/bio-header/bio-header.component";
import AppContainer from "./components/app-container/app-container.component";
import "./App.css";
import APP_DATA from "./app-manifest";

function App() {
    return (
        <Container className="App">
            <BioHeader />
            <AppContainer apps={APP_DATA} />
        </Container>
    );
}

export default App;
