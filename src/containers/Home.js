import React, { useState, useEffect, PureComponent } from "react";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import "./Home.css";

// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];




export default function Home(props) {
    const [history, setHistory] = useState([]);
    //const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function onLoad() {
            if (!props.isAuthenticated) {
                return;
            }

            try {
                const history = await loadHistory();
                setHistory(history);
                console.log(history);
            } catch (e) {
                alert(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [props.isAuthenticated]);

    function loadHistory() {
        return API.get("history", "/history/Israel");
    }

    function renderHistoryGraph(history) {
        //return <p>{JSON.stringify(history)}</p>;
        return (
            <LineChart
                width={500}
                height={300}
                data={history.Items}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="green" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="recovered" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="critical" stroke="#82ca9d" />
                <Line type="monotone" dataKey="deaths" stroke="red" />
            </LineChart>
        );
        // return (
        //     <LineChart
        //         width={500}
        //         height={300}
        //         data={data}
        //         margin={{
        //             top: 5, right: 30, left: 20, bottom: 5,
        //         }}
        //     >
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <Tooltip />
        //         <Legend />
        //         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        //         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        //         <Line type="monotone" dataKey="amt" stroke="red" />
        //     </LineChart>
        // );
    }


    function renderLander() {
        return (
            <div className="lander">
                <h1>Scratch</h1>
                <p>A simple note taking app</p>
            </div>
        );
    }

    function renderHistory() {
        return (
            <div className="notes">
                <PageHeader>Your Notes</PageHeader>
                <ListGroup>
                    {!isLoading && renderHistoryGraph(history)}
                </ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
            {props.isAuthenticated ? renderHistory() : renderLander()}
        </div>
    );
}
