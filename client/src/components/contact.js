import React from "react";
import {Button, Divider, List, ListItem, ListItemText, Paper, Typography} from '@mui/material';
import {arrayOf, shape, string, number} from 'prop-types';
import PhoneIcon from '@mui/icons-material/PhoneRounded';
import WebsiteIcon from '@mui/icons-material/OpenInBrowserRounded';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Contact({id, phone, website, hours}) {

    const navigate = useNavigate();

    return (
        <Paper variant="outlined" sx={{padding: 3}}>
            <Typography variant="h5" fontWeight="bold">Get in Touch</Typography>
            <Divider sx={{marginTop: 2}}/>
            <List>
                <ListItem>
                    <PhoneIcon fontSize="large" color="secondary" sx={{marginRight: 2}}/>
                    <ListItemText>{phone}</ListItemText>
                </ListItem>
                <ListItem>
                    <WebsiteIcon fontSize="large" color="secondary" sx={{marginRight: 2}}/>
                    <ListItemText>{website}</ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <Typography variant="h6" sx={{marginTop: 2}}>Office Hours</Typography>
            <Box sx={{display: "flex", gap: 5}}>
                <List>
                {hours.map(h => 
                    <Typography>{h.day}</Typography>
                )}
                </List>
                <List>
                {hours.map(h =>
                    <Typography sx={{textAlign: "right"}}>{h.time}</Typography>
                )}
                </List>
            </Box>
            <Divider sx={{marginTop: 2, marginBottom: 2}}/>
            <Button 
                onClick={() => navigate(`/book/${id}`)}
                size="large" 
                variant="contained" 
                sx={{color: "white.main", width: "100%", fontSize: 16}}>
                    Book a Tour
            </Button>
        </Paper>
    )
}

Contact.propTypes = {
    id: string,
    phone: string,
    website: string, 
    hours: arrayOf(shape({
        day: string,
        time: string
    }))
}