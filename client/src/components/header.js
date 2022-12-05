import React, { useState } from "react";
import {Box, Grid, Typography, Rating, Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import { string, shape, number, bool } from "prop-types";
import BedIcon from '@mui/icons-material/KingBedRounded';
import BathIcon from '@mui/icons-material/BathtubRounded';
import PetsIcon from '@mui/icons-material/PetsRounded';
import SqftIcon from '@mui/icons-material/SquareFootRounded';
import HeartIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/IosShareRounded';
import LeftIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import RightIcon from '@mui/icons-material/ArrowCircleRightRounded';

export default function Header({dwelling}) {

    const StyledRating = styled((props) => (
        <Rating size="large" readOnly {...props} />
      )) (({ theme }) => ({
        '& .MuiRating-iconFilled': {
            color: theme.palette.primary.main,
          },
        '& .MuiSvgIcon-root': {
            fontSize: 40,
          },
      }));

    return (
        <>
            <img src={`/dark_${dwelling.image}`} width="100%" height={475} style={{borderRadius: 10}}/>
            <Box sx={{position: "absolute", top: 300, left: 20, display: "flex"}}>
                <img src="/logo.png" height={80} style={{marginLeft: 60, marginRight: 20}}/>
                <Box sx={{width: 600}}>
                    <Typography variant="h2" fontWeight="bold" color="white.main">{dwelling.name}</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <StyledRating value={5}/>
                        <Typography color="secondary.light" fontSize={20}>(19)</Typography>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center", gap: "15px", marginTop: "3px", marginBottom: "10px"}}>
                        <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                            <BedIcon color="white" sx={{fontSize: 25}}/>
                            <Typography fontSize={14} color="white.main">{`${dwelling.size.minBed}-${dwelling.size.maxBed} bed`}</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                            <BathIcon color="white" sx={{fontSize: 25}}/>
                            <Typography fontSize={14} color="white.main">{`${dwelling.size.minBath}-${dwelling.size.maxBath} bath`}</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                            <PetsIcon color="white" sx={{fontSize: 25}}/>
                            <Typography fontSize={14} color="white.main">{dwelling.pets ? "Pets Allowed" : "No Pets"}</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", gap: "2px"}}>
                            <SqftIcon color="white" sx={{fontSize: 25}}/>
                            <Typography fontSize={14} color="white.main">{`${dwelling.size.minSqft}-${dwelling.size.maxSqft} sqft`}</Typography>
                        </Box>
                    </Box>
                    <Typography fontSize={13} width={300} color="white.main">{dwelling.description}</Typography>
                    <Typography fontSize={13} width={300} color="white.main" sx={{marginTop: 1}}>{dwelling.address}</Typography>
                    <Box sx={{display: "flex", alignItems: "center", gap: 1, marginTop: "3px", marginBottom: "3px"}}>
                        <Typography fontSize={20} fontWeight="bold" color="white.main">{`$${dwelling.price.minPrice}-${dwelling.price.maxPrice}`}</Typography>
                        <Typography fontSize={16} color="white.main">{`+${dwelling.price.parkingPrice} parking`}</Typography>
                        <Typography fontSize={16} color="white.main">{`+${dwelling.price.utilitiesPrice} utilities`}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingLeft: 20, width: 260}}>
                    <Button size="large" variant="outlined" color="white">See All Photos</Button>
                </Box>
            </Box>
            <Box sx={{position: "absolute", top: 100, right: 50, display: "flex", alignItems: "center", gap: "30px"}}>
                <Box sx={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <HeartIcon color="white" sx={{fontSize: 25}}/>
                    <Typography fontSize={14} color="white.main">Save</Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <ShareIcon color="white" sx={{fontSize: 25}}/>
                    <Typography fontSize={14} color="white.main">Share</Typography>
                </Box>
            </Box>
            <Box sx={{position: "absolute", top: 280, left: 35, width: 1195, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <LeftIcon color="white" fontSize="large"/>
                <RightIcon color="white" fontSize="large"/>
            </Box>
        </>
    )
}

Header.propTypes = {
    dwelling: shape({
        id: number,
        name: string,
        size: shape({
            minBed: number,
            maxBed: number,
            minBath: number,
            maxBath: number,
            minSqft: number,
            maxSqft: number
        }),
        pets: bool,
        description: string,
        price: shape({
            minPrice: number,
            maxPrice: number,
            parkingPrice: number,
            utilitiesPrice: number
        }),
        address: string
    })
}