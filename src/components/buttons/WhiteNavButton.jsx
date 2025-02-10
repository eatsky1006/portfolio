/* eslint-disable react/prop-types */
import { Button,  } from "@mui/material";


export const WhiteButton = ({ Title, onClick }) => {
    return (
        <Button 
            variant="contained" 
            onClick={onClick}
            sx={{
                fontSize: '0.9rem',
                border: '1px solid #ffffff',
                caretShape: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "10px",
                width: "120px",
                height: "40px",
            }}
        >
            {Title}
        </Button>
    )
}