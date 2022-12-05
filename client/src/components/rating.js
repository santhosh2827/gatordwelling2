import React, { useState, useEffect } from "react";
import {styled} from '@mui/material/styles';
import { Grid, Box,Typography, Divider } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {shape, string, number, arrayOf} from 'prop-types';

const Tube = styled((props) => (
    <LinearProgress variant="determinate" {...props} />
  ))(({ theme }) => ({
    height: 6,
    width: 120,
    borderRadius: 5,
    marginRight: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.colorPrimary,
    },
  }));

export default function Rating({ scores }) {

    return (
        <Grid container spacing={12} sx={{marginBottom: 5}}>
            <Grid item xs={6}>
                <Box sx={{display: "flex", alignItems: "center", marginBottom: 5, justifyContent: "space-between"}}>
                    <Typography variant="h6">Overall</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.overall * 20}/>
                      <Typography variant="body2" color="secondary">{scores.overall.toFixed(1)}</Typography>
                    </Box>
                </Box>

                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1">Cleanliness</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.cleanliness * 20}/>
                      <Typography variant="body2" color="secondary">{scores.cleanliness.toFixed(1)}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1">Value</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.value * 20}/>
                      <Typography variant="body2" color="secondary">{scores.value.toFixed(1)}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1">Location</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.location * 20}/>
                      <Typography variant="body2" color="secondary">{scores.location.toFixed(1)}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1">Management</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.management * 20}/>
                      <Typography variant="body2" color="secondary">{scores.management.toFixed(1)}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="subtitle1">Noise</Typography>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                      <Tube value={scores.noise * 20}/>
                      <Typography variant="body2" color="secondary">{scores.noise.toFixed(1)}</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{height: 67}}/>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Typography variant="subtitle1">Parking</Typography>
                  <Box sx={{display: "flex", alignItems: "center"}}>
                    <Tube value={scores.parking * 20}/>
                    <Typography variant="body2" color="secondary">{scores.parking.toFixed(1)}</Typography>
                  </Box>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Typography variant="subtitle1">Bus Routes</Typography>
                  <Box sx={{display: "flex", alignItems: "center"}}>
                    <Tube value={scores.busRoutes * 20}/>
                    <Typography variant="body2" color="secondary">{scores.busRoutes.toFixed(1)}</Typography>
                  </Box>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Typography variant="subtitle1">Safety</Typography>
                  <Box sx={{display: "flex", alignItems: "center"}}>
                    <Tube value={scores.safety * 20}/>
                    <Typography variant="body2" color="secondary">{scores.safety.toFixed(1)}</Typography>
                  </Box>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Typography variant="subtitle1">Water Pressure</Typography>
                  <Box sx={{display: "flex", alignItems: "center"}}>
                    <Tube value={scores.waterPressure * 20}/>
                    <Typography variant="body2" color="secondary">{scores.waterPressure.toFixed(1)}</Typography>
                  </Box>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <Typography variant="subtitle1">Internet</Typography>
                  <Box sx={{display: "flex", alignItems: "center"}}>
                    <Tube value={scores.internet * 20}/>
                    <Typography variant="body2" color="secondary">{scores.internet.toFixed(1)}</Typography>
                  </Box>
              </Box>
            </Grid>
        </Grid>
    )
}

Rating.propTypes = {
    scores: shape({
        overall: number,
        cleanliness: number,
        value: number,
        location: number,
        management: number,
        noise: number,
        parking: number,
        busRoutes: number,
        safety: number,
        waterPressure: number,
        internet: number
    })
}