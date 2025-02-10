/* eslint-disable react/prop-types */
import { Button, } from "@mui/material";


export const TransparentNavButton = ({ Title, onClick }) => {

    return (
        <>
            <Button 
                variant="outlined" 
                onClick={onClick}
                sx={{
                    fontSize: '0.8rem',
                    border: '1px solid #585858',
                    caretShape: "none",
                    color: "#ffffff",
                    borderRadius: "10px",
                    width: "110px",
                    height: "40px",
                }}
            >
                {Title}
            </Button>
        </>
    )

}