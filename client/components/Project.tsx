import * as React from 'react';
import { Button, Divider, Stack } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import diceRoller from "../assets/DiceRoller.png";
import empData from "../assets/employeeDatabase.png";
import ReadMe from "../assets/ReadMeGen.png";
import stocks from "../assets/StockSite.png";
import vehicles from "../assets/VehicleBuilder.png";
import weather from "../assets/WeatherAPI.png";


//6 projects needed. Direct to github and deployed location if applicable

export default function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                <Box sx={{ p: 4, border: 'black'}}>
                    <h1>Search Stock Site</h1>
                    <img src={stocks}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat/SearchStockSite";
                        }}>StockSite Github</Button>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://searchstocksite.onrender.com/";
                        }}>StockSite Deployed</Button>
                    </Stack>
                </Box>
                
                <Box sx={{ p: 4, border: 'black'}}>
                    <h1>Weather Projection</h1>
                    <img src={weather}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat/WeatherAPIhw"
                        }}>Weather Github</Button>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://weatherapihw.onrender.com";
                        }}>Weather Deployed</Button>
                    </Stack>
                </Box>
            </Stack>

            <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                <Box sx={{ p: 4, border: 'black'}}>
                    <h1>Employee Database</h1>
                    <img src={empData}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat/EmployeeDatabase";
                        }}>Employee Database Github</Button>
                    </Stack>
                </Box>

                <Box sx={{ p: 4, border: 'black'}}>
                    <h1>Vehicle Builder</h1>
                    <img src={vehicles}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat/VehicleBuilder";
                        }}>Vehicle Github</Button>
                    </Stack>
                </Box>
            </Stack>

            <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                <Box sx={{ p: 4, border: 'black'}}>
                    <h1>ReadMe Generator</h1>
                    <img src={ReadMe}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/DevinSharp-Eflat/ReadMeGenerator";
                        }}>Readme Github</Button>
                    </Stack>
                </Box>

                <Box sx={{ p: 4, border: 'black', backgroundImage: 'imageURL'}}>
                    <h1>Dice Roller</h1>
                    <img src={diceRoller}/>
                    <Stack direction={"row"} spacing={20} sx={{alignContent: 'center'}}>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://github.com/Zyndrr/RPG-Dice-Roller";
                        }}>Dice Roller Github</Button>
                        <Button variant='outlined'
                        onClick={() => { window.location.href = "https://zyndrr.github.io/RPG-Dice-Roller/";
                        }}>Dice Roller Deployed</Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}