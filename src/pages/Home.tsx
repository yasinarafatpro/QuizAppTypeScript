import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'

const Home: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [language, setLanguage] = useState<string>('');

    const navigate=useNavigate()

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    const onSubmit=()=>{
        navigate(`/quiz/${name}/${language}`)
    }
   
    
    return (
        <div>
            <header>
                Quize App
            </header>
            <div>
                <input type='text' placeholder='Name' onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
                <div>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Select Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={language}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='JavaScript'>JavaScript</MenuItem>
                            <MenuItem value='Php'>Php</MenuItem>
                            <MenuItem value='C Programming'>C Programming</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Button type='submit' variant='outlined'onClick={onSubmit}>Go To Quiz</Button>
                </div>
            </div>

        </div>
    )
}

export default Home
