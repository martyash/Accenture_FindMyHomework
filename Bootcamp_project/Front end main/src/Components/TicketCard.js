import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import "./TicketCard.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0.5px solid grey",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function TicketCard({
    inputId,
    inputTitle,
    inputDesc,
    inputAccC,
    setModal,
    similarity,
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{
                    minWidth: 275,
                    width: 600,
                    marginLeft: 10,
                    marginTop: 5,
                    marginRight: 10,
                    borderRadius: 5,
                    cursor: "pointer",
                }}
                onClick={handleOpen}
                className="ticket-card"
            >
                {/*  */}
                <CardContent>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "block" }}>
                            <Typography
                                sx={{ mb: 1.5 }}
                                color="text.primary"
                                variant="h5"
                            >
                                {inputTitle}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} variant="body2">
                                <Box fontWeight="fontWeightBold">
                                    Description:
                                </Box>
                                {inputDesc}
                            </Typography>
                            {/* <Typography variant="body2">
                                <Box fontWeight="fontWeightBold">
                                    Acceptance Criteria:
                                </Box>
                                {inputAccC}
                            </Typography> */}
                        </div>
                        <div
                            style={{
                                color:
                                    similarity < 70
                                        ? "red"
                                        : similarity > 85
                                        ? "green"
                                        : "orange",
                                fontFamily: "fantasy",
                                fontSize: "36px",
                                marginTop: "30px",
                                marginLeft: "10px",
                            }}
                        >
                            {Math.round(similarity)}%
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h5" component="div">
                            Ticket ID: {inputId}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                            className="similarity-on-pop-up-ticket"
                        >
                            {Math.round(similarity)}%
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ mt: 1.5, mb: 1.5 }}
                        >
                            {inputTitle}
                        </Typography>
                        <Divider />

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box fontWeight="fontWeightBold">Description:</Box>
                            {inputDesc}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box fontWeight="fontWeightBold">
                                Acceptance Criteria:
                            </Box>
                            {inputAccC}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <Box fontWeight="fontWeightBold">Contact:</Box>
                            brian.wang900@gmail.com
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
