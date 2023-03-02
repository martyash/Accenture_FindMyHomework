import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function Form({ handleAddTickets }) {
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [acc, setAcc] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        const payload = {
            id: id,
            title: title,
            description: desc,
            acceptance_criteria: acc,
        };

        const URL =
            "http://ec2-3-26-42-153.ap-southeast-2.compute.amazonaws.com:5000/sendTicket";
        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        };
        setIsLoading(true);
        fetch(URL, postRequestOptions)
            .then((response) => response.json())
            // .then((response) => console.log(response.data))
            .then((response) => handleAddTickets(response.data))
            .then(() => setIsLoading(false))
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <h1></h1>
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Ticket ID"
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Title"
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-static"
                        label="Acceptance Criteria"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setAcc(e.target.value)}
                    />
                </div>
            </Box>
            <div
                style={{
                    marginLeft: "8px",
                    marginTop: "10px",
                    //  backgroundColor: "white",
                    color: "green",
                    display: "flex",
                }}
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleSubmit()}
                >
                    Search similar tickets
                </Button>
                {isLoading && (
                    <div style={{ marginTop: "5px", marginLeft: "15px" }}>
                        <CircularProgress />
                    </div>
                )}
            </div>
        </>
    );
}
