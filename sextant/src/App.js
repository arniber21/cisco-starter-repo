import './App.css';
import Banner from "./components/Banner";
import Card from "./components/Card";
import GetIP from "./components/GetIP";
import PacketLatency from "./components/PacketLatency";

function App() {
    return (
        <div className="App">
            <Banner />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-auto">
                        <Card title={'Your IPV4 Address'}>
                            <GetIP />
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card title={'Your IPV6 Address'}>
                            <GetIP protocol='ipv6'/>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card title={'Websocket Latency'}>
                            <PacketLatency />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
