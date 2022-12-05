import React, { useState } from "react";
import {Box, Typography, Rating} from '@mui/material';
import { string, shape, number, bool } from "prop-types";
import {styled} from '@mui/material/styles';
import BedIcon from '@mui/icons-material/KingBedRounded';
import BathIcon from '@mui/icons-material/BathtubRounded';
import PetsIcon from '@mui/icons-material/PetsRounded';
import { useNavigate } from "react-router-dom";

const StyledRating = styled((props) => (
	<Rating size="small" readOnly {...props} />
  )) (({ theme }) => ({
	'& .MuiRating-iconFilled': {
		color: theme.palette.primary.main,
	  }
  }));

export default function DwellingCard({ dwelling }) {

    const navigate = useNavigate();

    return (
        <Box>
            <img src={dwelling.image} width="100%" height={125} style={{borderRadius: 7}}
                onClick={() => navigate(`/details/${dwelling.id}`)}
            />
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography fontSize={14} sx={{marginTop: "2px"}}>{dwelling.name}</Typography>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <StyledRating value={5}/>
                    <Typography color="secondary" fontSize={10}>(19)</Typography>
                </Box>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "6px", marginTop: "3px", marginBottom: "3px"}}>
                <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                    <BedIcon color="secondary" fontSize="small" sx={{height: "18px"}}/>
                    <Typography fontSize={11} color="secondary.dark">{`${dwelling.size.minBed}-${dwelling.size.maxBed} bed`}</Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                    <BathIcon color="secondary" fontSize="small" sx={{height: "16px"}}/>
                    <Typography fontSize={11} color="secondary.dark">{`${dwelling.size.minBath}-${dwelling.size.maxBath} bath`}</Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                    <PetsIcon color="secondary" fontSize="small" sx={{height: "16px"}}/>
                    <Typography fontSize={11} color="secondary.dark">{dwelling.pets ? "Pets Allowed" : "No Pets"}</Typography>
                </Box>
            </Box>
            <Typography fontSize={11} color="secondary.dark">{dwelling.description}</Typography>
            <Box sx={{display: "flex", alignItems: "center", gap: 1, marginTop: "3px", marginBottom: "3px"}}>
                <Typography fontSize={12} fontWeight="bold">{`$${dwelling.price.minPrice}-${dwelling.price.maxPrice}`}</Typography>
                <Typography fontSize={11} color="secondary.dark">{`+${dwelling.price.parkingPrice} parking`}</Typography>
                <Typography fontSize={11} color="secondary.dark">{`+${dwelling.price.utilitiesPrice} utilities`}</Typography>
            </Box>
        </Box>
    )
}

DwellingCard.propTypes = {
    dwelling: shape({
        id: number,
        name: string,
        size: shape({
            minBed: number,
            maxBed: number,
            minBath: number,
            maxBath: number
        }),
        pets: bool,
        description: string,
        price: shape({
            minPrice: number,
            maxPrice: number,
            parkingPrice: number,
            utilitiesPrice: number
        })
    })
}