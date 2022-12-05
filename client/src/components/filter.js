import * as React from 'react';
import { useState } from 'react';
import {Drawer, Toolbar, AccordionSummary, Box, AccordionDetails, Typography, Slider,
FormControl, InputLabel, OutlinedInput, InputAdornment, ToggleButton, ToggleButtonGroup,
FormControlLabel, Grid, Checkbox, Rating} from '@mui/material';
import AddIcon from '@mui/icons-material/AddRounded';
import MinusIcon from '@mui/icons-material/RemoveRounded';
import HouseIcon from '@mui/icons-material/HouseTwoTone';
import TownhomeIcon from '@mui/icons-material/HolidayVillageTwoTone';
import ApartmentIcon from '@mui/icons-material/ApartmentTwoTone';
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import { func, shape, string, number, bool , arrayOf} from 'prop-types';

const drawerWidth = 284;

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
	'&:before': {
	  display: 'none',
	},
  }));

const CircleButton = styled(ToggleButton)({
	borderRadius: 50,
	width: 35,
	height: 35
});

const StyledRating = styled(Rating) (({ theme }) => ({
	'& .MuiRating-iconFilled': {
		color: theme.palette.primary.main,
	  }
  }));

export default function Filter({dwellings, setDwellings}) {

	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);
	const [open7, setOpen7] = useState(false);
	const [open8, setOpen8] = useState(false);
	const [open9, setOpen9] = useState(false);
	const [open10, setOpen10] = useState(false);
	const [open11, setOpen11] = useState(false);
	const [house, setHouse] = useState(false);
	const [apartment, setApartment] = useState(false);
	const [townhome, setTownhome] = useState(false);
	const [furnish, setFurnish] = useState(false);
	const [bedAny, setBedAny] = useState(false);
	const [bed1, setBed1] = useState(false);
	const [bed2, setBed2] = useState(false);
	const [bed3, setBed3] = useState(false);
	const [bed4, setBed4] = useState(false);
	const [bed5, setBed5] = useState(false);
	const [bathAny, setBathAny] = useState(false);
	const [bath1, setBath1] = useState(false);
	const [bath2, setBath2] = useState(false);
	const [bath3, setBath3] = useState(false);
	const [bath4, setBath4] = useState(false);
	const [bath5, setBath5] = useState(false);
	const [distanceToCampus, setDistanceToCampus] = useState(3);
	const [distanceToBus, setDistanceToBus] = useState(0.5);
	const [busFrequency, setBusFrequency] = useState(15);
	const [pets, setPets] = useState(false);
	const [rating, setRating] = useState(0);

	const filterOutdoor = () => {
		const filtered = dwellings.filter(d => d.amenities.outdoorSpace === true);
		setDwellings(filtered);
	}

  	return (
      	<Drawer
			sx={{
			width: drawerWidth,
			flexShrink: 0,
			'& .MuiDrawer-paper': {
				width: drawerWidth,
				boxSizing: 'border-box',
			},
			}}
			variant="permanent"
			anchor="left"
		>
        	<Toolbar />
        	<Box sx={{padding: 2}}>
				<Typography variant="h3" fontSize={18} fontWeight="bold" sx={{marginBottom: "3px"}}>Find Your Dream Home</Typography>
				<Typography variant="body1" fontSize={12}>Over 200 homes available</Typography>
				<Accordion expanded={open1} onChange={() => setOpen1(!open1)}>
					<AccordionSummary expandIcon={open1 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Price Range</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1}}>
						<FormControl fullWidth size='small'>
							<InputLabel>Min</InputLabel>
							<OutlinedInput
								startAdornment={<InputAdornment position="start">$</InputAdornment>}
								label="Min"
							/>
						</FormControl>
						<MinusIcon color="secondary"/>
						<FormControl fullWidth size='small'>
							<InputLabel>Max</InputLabel>
							<OutlinedInput
								startAdornment={<InputAdornment position="start">$</InputAdornment>}
								label="Max"
							/>
						</FormControl>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open2} onChange={() => setOpen2(!open2)}>
					<AccordionSummary expandIcon={open2 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Rental Type</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{display: "flex", flexDirection: "column", gap: 1}}>
						<div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8}}>
							<ToggleButton selected={house} onChange={() => setHouse(!house)}
								sx={{display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 70}}>
								<HouseIcon fontSize="large"/>
								<Typography fontSize={12}>House</Typography>
							</ToggleButton>
							<ToggleButton selected={apartment} onChange={() => setApartment(!apartment)}
								sx={{display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 70}}>
								<ApartmentIcon fontSize="large"/>
								<Typography fontSize={12}>Apartment</Typography>
							</ToggleButton>
							<ToggleButton selected={townhome} onChange={() => setTownhome(!townhome)}
								sx={{display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 70}}>
								<TownhomeIcon fontSize="large"/>
								<Typography fontSize={12}>Townhome</Typography>
							</ToggleButton>
						</div>
						<ToggleButtonGroup value={furnish} onChange={() => setFurnish(!furnish)}>
							<ToggleButton value={true}>
								<Typography>Furnished</Typography>
							</ToggleButton>
							<ToggleButton value={false}>
								<Typography>Unfurnished</Typography>
							</ToggleButton>
						</ToggleButtonGroup>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open3} onChange={() => setOpen3(!open3)}>
					<AccordionSummary expandIcon={open3 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Beds/Baths</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography fontSize={13} sx={{marginBottom: "5px"}}>Number of Bedrooms</Typography>
						<Box sx={{display: "flex", gap: "5px"}}>
							<CircleButton selected={bedAny} onChange={() => setBedAny(!bedAny)}>
								<Typography>Any</Typography>
							</CircleButton>
							<CircleButton selected={bed1} onChange={() => setBed1(!bed1)}>
								<Typography>1</Typography>
							</CircleButton>
							<CircleButton selected={bed2} onChange={() => setBed2(!bed2)}>
								<Typography>2</Typography>
							</CircleButton>
							<CircleButton selected={bed3} onChange={() => setBed3(!bed3)}>
								<Typography>3</Typography>
							</CircleButton>
							<CircleButton selected={bed4} onChange={() => setBed4(!bed4)}>
								<Typography>4</Typography>
							</CircleButton>
							<CircleButton selected={bed5} onChange={() => setBed5(!bed5)}>
								<Typography>5+</Typography>
							</CircleButton>
						</Box>
						<Typography fontSize={13} sx={{marginBottom: "5px", marginTop: "10px"}}>Number of Bathrooms</Typography>
						<Box sx={{display: "flex", gap: "5px"}}>
							<CircleButton selected={bathAny} onChange={() => setBathAny(!bathAny)}>
								<Typography>Any</Typography>
							</CircleButton>
							<CircleButton selected={bath1} onChange={() => setBath1(!bath1)}>
								<Typography>1</Typography>
							</CircleButton>
							<CircleButton selected={bath2} onChange={() => setBath2(!bath2)}>
								<Typography>2</Typography>
							</CircleButton>
							<CircleButton selected={bath3} onChange={() => setBath3(!bath3)}>
								<Typography>3</Typography>
							</CircleButton>
							<CircleButton selected={bath4} onChange={() => setBath4(!bath4)}>
								<Typography>4</Typography>
							</CircleButton>
							<CircleButton selected={bath5} onChange={() => setBath5(!bath5)}>
								<Typography>5+</Typography>
							</CircleButton>
						</Box>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open4} onChange={() => setOpen4(!open4)}>
					<AccordionSummary expandIcon={open4 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Location</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Max Distance from Campus</Typography>
						<Slider value={distanceToCampus} onChange={(e, val) => setDistanceToCampus(val)} min={0} max={10} step={0.5}/>
						<Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
							<Typography fontSize={11} color="secondary">0.1 mi</Typography>
							<Typography fontSize={11} color="secondary">{'>'}10 mi</Typography>
						</Box>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Neighborhoods</Typography>
						<Grid container>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Midtown"/>
								<FormControlLabel control={<Checkbox />} label="Downtown"/>
								<FormControlLabel control={<Checkbox />} label="Innovate Dist."/>
								<FormControlLabel control={<Checkbox />} label="Sugarfoot"/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="5th Avenue"/>
								<FormControlLabel control={<Checkbox />} label="Kirkwood"/>
								<FormControlLabel control={<Checkbox />} label="Archer"/>
								<FormControlLabel control={<Checkbox />} label="Golfview"/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open5} onChange={() => setOpen5(!open5)}>
					<AccordionSummary expandIcon={open5 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Features</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Washer/Dryer"/>
								<FormControlLabel control={<Checkbox />} label="Disposal"/>
								<FormControlLabel control={<Checkbox />} label="Granite Counter"/>
								<FormControlLabel control={<Checkbox />} label="Walk-in Closets"/>
								<FormControlLabel control={<Checkbox />} label="Fireplace"/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Dishwasher"/>
								<FormControlLabel control={<Checkbox />} label="Balcony"/>
								<FormControlLabel control={<Checkbox />} label="Hardwood Floor"/>
								<FormControlLabel control={<Checkbox />} label="Wi-Fi Included"/>
								<FormControlLabel control={<Checkbox />} label="Ceiling Fans"/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open6} onChange={() => setOpen6(!open6)}>
					<AccordionSummary expandIcon={open6 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Amenities</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Pool"/>
								<FormControlLabel control={<Checkbox />} label="Study Rooms"/>
								<FormControlLabel control={<Checkbox />} label="Trash Chutes"/>
								<FormControlLabel control={<Checkbox />} label="Maintenance"/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Gym"/>
								<FormControlLabel control={<Checkbox />} label="Clubhouse"/>
								<FormControlLabel control={<Checkbox onChange={() => filterOutdoor()}/>} label="Outdoor Space"/>
								<FormControlLabel control={<Checkbox />} label="Activities"/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open7} onChange={() => setOpen7(!open7)}>
					<AccordionSummary expandIcon={open7 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Transportation</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Max Distance from Nearest Bus Stop</Typography>
						<Slider value={distanceToBus} onChange={(e, val) => setDistanceToBus(val)} min={0} max={2} step={0.1}/>
						<Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
							<Typography fontSize={11} color="secondary">0 mi</Typography>
							<Typography fontSize={11} color="secondary">{'>'}2 mi</Typography>
						</Box>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Frequency of Buses</Typography>
						<Slider value={busFrequency} onChange={(e, val) => setBusFrequency(val)} min={5} max={60} step={1}/>
						<Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
							<Typography fontSize={11} color="secondary">5 min</Typography>
							<Typography fontSize={11} color="secondary">{'>'}1 hr</Typography>
						</Box>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Parking</Typography>
						<Grid container>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Assigned Spots"/>
								<FormControlLabel control={<Checkbox />} label="Guest Spots"/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Covered Spots"/>
								<FormControlLabel control={<Checkbox />} label="Free"/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open8} onChange={() => setOpen8(!open8)}>
					<AccordionSummary expandIcon={open8 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Pet Policy</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ToggleButtonGroup value={pets} onChange={() => setPets(!pets)}>
							<ToggleButton value={true}>
								<Typography>Pets Allowed</Typography>
							</ToggleButton>
							<ToggleButton value={false}>
								<Typography>No Pets</Typography>
							</ToggleButton>
						</ToggleButtonGroup>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open9} onChange={() => setOpen9(!open9)}>
					<AccordionSummary expandIcon={open9 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Safety</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="Security Officer"/>
								<FormControlLabel control={<Checkbox />} label="Cameras"/>
								<FormControlLabel control={<Checkbox />} label="Fobs"/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel control={<Checkbox />} label="2-Level Keys"/>
								<FormControlLabel control={<Checkbox />} label="Smoke Detector"/>
								<FormControlLabel control={<Checkbox />} label="First Aid"/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open10} onChange={() => setOpen10(!open10)}>
					<AccordionSummary expandIcon={open10 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Leasing Period</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1}}>
						<FormControl fullWidth size='small'>
							<InputLabel>From</InputLabel>
							<OutlinedInput label="From"/>
						</FormControl>
						<MinusIcon color="secondary"/>
						<FormControl fullWidth size='small'>
							<InputLabel>To</InputLabel>
							<OutlinedInput label="To"/>
						</FormControl>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open11} onChange={() => setOpen11(!open11)}>
					<AccordionSummary expandIcon={open11 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Ratings</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography fontSize={13} sx={{marginBottom: "8px"}}>Minimum Acceptable Rating</Typography>
						<StyledRating
							value={rating}
							onChange={(event, newValue) => setRating(newValue)}
							/>
					</AccordionDetails>
				</Accordion>
		</Box>
      </Drawer>
  );
}

Filter.propTypes = {
    dwellings: arrayOf(shape({
        id: number,
        name: string,
		image: string,
		rentalType: string,
		location: shape({
			distanceToCampus: number,
			distanceToBus: number,
			frequencyOfBuses: number,
			neighborhood: string
		}),
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
        address: string,
		features: shape({
			washerDryer: bool
		}),
		amenities: shape({
			outdoorSpace: bool
		})
    })),
	setDwellings: func
}