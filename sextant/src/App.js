import './App.css';
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Banner />
            <div className="container">
                <Card title={'Sample Card'}>
                    Some cool content
                </Card>
            </div>

        </div>
    );
}

export default App;
