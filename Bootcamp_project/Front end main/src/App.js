import "./App.css";
import ButtonAppBar from "./Components/AppBar";
import TicketCard from "./Components/TicketCard";
import Card from "@mui/material/Card";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
    const [tickets, setTickets] = useState([]);

    const handleAddTickets = (data) => {
        // setTickets(JSON.parse(data));
        const ticketsArray = [...data];
        ticketsArray.sort((a, b) => b.similarity - a.similarity);
        setTickets(ticketsArray);
    };

    return (
        <>
            <ButtonAppBar></ButtonAppBar>
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        width: tickets.length === 0 ? "100vw" : "50%",
                        height: "10vh",
                    }}
                >
                    <div
                        style={{
                            marginTop: "25px",
                            marginLeft: tickets.length === 0 ? "40px" : "40px",
                        }}
                    >
                        <div
                            style={{
                                marginLeft: "5px",
                            }}
                        >
                            <h1>Search for a ticket</h1>
                            <p style={{ fontWeight: "lighter  " }}>
                                Click on ticket to view more information.
                            </p>
                        </div>
                        <Form handleAddTickets={handleAddTickets} />
                    </div>
                </div>

                <div
                    style={{
                        maxHeight: "1000px",
                        overflow: "auto",
                        marginLeft: "45px",
                        height: "90vh",
                    }}
                    className="ticket-scroll"
                >
                    <div>
                        {tickets.length !== 0 && (
                            <div
                                style={{
                                    marginLeft: "40px",
                                }}
                            >
                                <h1>Relevant Tickets</h1>
                                <p style={{ fontWeight: "lighter" }}>
                                    Click on a ticket to view more information
                                </p>
                            </div>
                        )}
                        {tickets.map((obj, key) => {
                            // console.log(obj);
                            return (
                                <TicketCard
                                    inputId={obj.id}
                                    inputTitle={obj.title}
                                    inputDesc={obj.description}
                                    inputAccC={obj.acceptance_criteria}
                                    key={key}
                                    similarity={obj.similarity}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
