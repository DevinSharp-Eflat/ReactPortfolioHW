import * as React from "react";
import { Button, ButtonGroup, Stack } from '@mui/material';

export default function Header() {
    return (
        <>
        <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
        <h1>Devin S.</h1>
        <ButtonGroup size="large" variant="contained" aria-label="website nav" sx={{justifyContent:  'right'}}>
            <Button variant="contained"
                onClick={() => { let path = '/';
                window.location.href = path;
                }}>Home</Button>
            <Button variant="contained"
                onClick={() => { let path = '/portfolio';
                window.location.href = path;
                }}>Portfolio</Button>
            <Button variant="contained"
                onClick={() => { let path = '/contact';
                window.location.href = path;
                }}>Contact</Button>
            <Button variant="contained"
                onClick={() => { let path = '/resume';
                window.location.href = path;
                }}>Resume</Button>
        </ButtonGroup>
        </Stack>
        </>
    )
}