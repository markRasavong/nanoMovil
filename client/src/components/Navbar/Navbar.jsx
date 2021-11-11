import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <header position='static' className={classes.header}>
                <Toolbar>
                    <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.navtext} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </header>
        </Box>
    )
}

export default Navbar;