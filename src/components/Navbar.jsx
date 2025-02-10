/* eslint-disable no-unused-vars */
import { AppBar, Toolbar, Typography, Button, styled, Box, Avatar, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { WhiteButton } from './buttons/WhiteNavButton';
import { TransparentNavButton } from './buttons/TransparentNavButton';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: 'none',
    marginTop: '20px',
}));

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'About Me', target: 'about' },
        { label: 'Experience', target: 'experience' },
        { label: 'Projects', target: 'projects' },
        { label: 'Contact', target: 'contact', isWhite: true },
    ];

    return (
        <StyledAppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/LogoWithName.png"
                        alt="Portfolio logo"
                        style={{ display: { xs: 'none', md: 'block' }, height: '80px' }}
                    />
                </Box>

                {/* Desktop Navigation */}
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: 2,
                    alignItems: 'center'
                }}>
                    {navItems.slice(0, -1).map((item) => (
                        <TransparentNavButton
                            key={item.target}
                            onClick={() => {
                                document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            Title={item.label}
                        />
                    ))}
                    <WhiteButton
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        Title="Contact"
                    />
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    color="inherit"
                    aria-label="open menu"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        p: 1.5
                    }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            backdropFilter: 'blur(10px)',
                            width: '50%',
                            p: 3
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        mt: 4,
                        alignItems: 'center'
                    }}>
                        {navItems.map((item) => (
                            item.isWhite ? (
                                <WhiteButton
                                    key={item.target}
                                    Title={item.label}
                                    onClick={() => {
                                        handleDrawerToggle();
                                        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    sx={{ width: '100%', justifyContent: 'center' }}
                                />
                            ) : (
                                <TransparentNavButton
                                    key={item.target}
                                    Title={item.label}
                                    onClick={() => {
                                        handleDrawerToggle();
                                        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    sx={{ width: '100%', justifyContent: 'center' }}
                                />
                            )
                        ))}
                    </Box>
                </Drawer>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;