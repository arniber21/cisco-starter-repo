import {useEffect, useState} from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

const PacketLatency = () => {
    const [latency, setLatency] = useState(0);
    const getCurrentTime = () => new Date().getTime();
    client.onopen = () => {
        console.log(`Connected to client`);
    }
    client.onmessage = (message) => {
        setLatency(getCurrentTime() - message.data);
    }
    return (
        <>
            Your Packet Latency is: { latency.toString() } ms
        </>
    )
}

export default PacketLatency;