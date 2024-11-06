import * as React from "react";
import { Button, ButtonGroup, Stack } from '@mui/material';

export default function Footer() {
    return (
        <>
        <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
            <ButtonGroup size="medium">
            <Button variant="contained" sx={{backgroundColor: "#a2c7e5"}}
                onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat";
                }}>Github</Button>
            <Button variant="contained" sx={{backgroundColor: "#a2c7e5"}}
                onClick={() => { window.location.href = "https://www.linkedin.com/in/devinisharp/";
                }}>LinkedIn</Button>
            </ButtonGroup>
        </Stack>
        </>
    )
}