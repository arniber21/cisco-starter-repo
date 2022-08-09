import {useEffect, useState} from "react";

const GetIP = ({ protocol }) => {
    const [ipAddr, setIpAddr] = useState(null);
    useEffect(() => {
        const makeRequest = async () => {
            const url = protocol === 'ipv6' ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';
            const rawData = await fetch(url);
            const parsedData = await rawData.json();
            setIpAddr(parsedData.ip);
        }
        makeRequest().then();
    }, [protocol]);
    return (
        <>
            Your IP Address is { ipAddr }
        </>
    )
}

export default GetIP;