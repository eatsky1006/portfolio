/* eslint-disable no-unused-vars */
import { AppBar, Toolbar, Typography, Button, styled, Box, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { WhiteButton } from './buttons/WhiteNavButton';
import { TransparentNavButton } from './buttons/TransparentNavButton';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: 'none',
    marginTop: '20px',
}));



const Navbar = () => {
    return (
        <StyledAppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <nav aria-label="Main navigation">
                        <img
                            src="/LogoWithName.png"
                            alt="Portfolio logo"
                            aria-hidden="true"
                            style={{ height: '80px' }}
                        />
                    </nav>
                </Box>
                <Box sx={{ display: 'flex', gap: theme => theme.spacing(2) }}>
                    <TransparentNavButton
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        Title="About Me"
                    />
                    <TransparentNavButton
                        onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                        Title="Experience"
                    />
                    <TransparentNavButton
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        Title="Projects"
                    />
                    <WhiteButton
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        Title="Contact"
                    />

                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;