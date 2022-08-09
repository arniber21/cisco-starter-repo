import {useEffect, useState} from "react";

const GetIP = () => {
    const [ipAddr, setIpAddr] = useState(null);
    useEffect(() => {
        const makeRequest = async () => {
            const rawData = await fetch('https://api.ipify.org?format=json  ');
            const parsedData = await rawData.json();
            setIpAddr(parsedData.ip);
        }
        makeRequest();
    }, []);
    return (
        <>
            Your IP Address is { ipAddr }
        </>
    )
}

export default GetIP;