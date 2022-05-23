import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function MainPageHeader() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Anything Helper
                </Typography>
            </Toolbar>
        </AppBar>
    );
}