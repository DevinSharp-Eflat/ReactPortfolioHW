import { Stack, TextField } from "@mui/material";
import * as React from "react";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

// function nameFieldError() {
//     const filled = useFormControl()?.filled;
//     const helperText = React.useMemo(() => {
//         if(!filled){
//             return "This field must be filled out";
//         }
// }, [filled]);
//     return <FormHelperText color="red">{helperText}</FormHelperText>;
// }

// function emailFieldError() {
//     const filled = useFormControl()?.filled;
//     const helperText = React.useMemo(() => {
//         if(!filled){
//             return "This field must be filled out";
//         }
// }, [filled]);
//     return <FormHelperText color="red">{helperText}</FormHelperText>;
// }

// function messageFieldError() {
//     const filled = useFormControl()?.filled;
//     if(!filled){
//         name.error = true;
//     }
    
// }

export default function Contact() {
    return (
        <>
        <h1>Contact Me</h1>
            <Stack direction={"column"}>
                <TextField required id="name" label="name" variant="standard"/>
                <TextField required id="email" label="email" variant="standard"/>
                <TextField required id="message" label="message" variant="standard"/>
            </Stack>
        </>        
    )
}