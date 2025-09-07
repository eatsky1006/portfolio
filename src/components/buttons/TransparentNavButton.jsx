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
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(255, 255, 255, 0.15)',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: 'translateX(-100%)',
                    },
                    '&:hover::after': {
                        transform: 'translateX(100%)',
                        transition: 'transform 0.6s ease-in-out',
                    },
                    overflow: 'hidden',
                }}
            >
                {Title}
            </Button>
        </>
    )

}