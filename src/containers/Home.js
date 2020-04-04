import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Home.css";

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
        return API.get("stats", "/history/Israel");
    }

    function renderHistoryGraph(history) {
        return <p>loaded</p>;
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
