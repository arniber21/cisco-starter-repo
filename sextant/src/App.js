import './App.css';
import Banner from "./components/Banner";
import Card from "./components/Card";
import GetIP from "./components/GetIP";

function App() {
    return (
        <div className="App">
            <Banner />
            <div className="container">
                <Card title={'Your IP Address'}>
                    <GetIP />
                </Card>
            </div>

        </div>
    );
}

export default App;
