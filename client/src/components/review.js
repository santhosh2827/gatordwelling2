import { Box, Grid, Typography, Rating, Chip, Divider } from "@mui/material";
import { arrayOf, bool, number, shape, string } from "prop-types";
import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined';
import {styled} from '@mui/material/styles';

const StyledRating = styled((props) => (
    <Rating size="large" readOnly {...props} />
  )) (({ theme }) => ({
    '& .MuiRating-iconFilled': {
        color: theme.palette.primary.main,
      },
    '& .MuiSvgIcon-root': {
        fontSize: 24,
      },
    marginRight: 4
  }));

export default function Review({review}) {
    return (
        <Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <img src={`/${review.reviewer.image}`} height={70} style={{marginRight: 20}}/>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">{review.reviewer.name}</Typography>
                        <Typography variant="body2" color="secondary.dark">{`Resident for ${review.reviewer.lengthOfResidence} years`}</Typography>
                        <Box sx={{display: "flex", gap: 3}}>
                        <Typography variant="body2" color="secondary.dark">
                            {`Would live here again: ${review.review.wouldLiveHereAgain ? "Yes" : "No"}`}
                        </Typography>
                        <Typography variant="body2" color="secondary.dark">
                            {`Rent: $${review.review.rent}`}
                        </Typography>
                        <Typography variant="body2" color="secondary.dark">
                            {`Utilities: ~$${review.review.utilities}`}
                        </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: "flex"}}>
                    <ThumbUpIcon color="secondary"/>
                    <Typography variant="body1" color="secondary.dark" sx={{marginLeft: "4px", marginRight: 2}}>
                        {review.likes}
                    </Typography>
                    <ThumbDownIcon color="secondary"/>
                    <Typography variant="body1" color="secondary.dark" sx={{marginLeft: "4px"}}>
                        {review.dislikes}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{marginTop: 2}}>
                <Typography variant="h6" fontWeight="bold" color="secondary.dark" sx={{fontStretch: "condensed"}}>
                    {review.review.title}
                </Typography>
                <Box sx={{display: "flex", alignItems: "center", marginTop: 1, marginBottom: 1}}>
                    <StyledRating value={5}/>
                    <Typography color="secondary" fontSize={14}>{review.date}</Typography>
                </Box>
                <Typography variant="body2" color="secondary.dark" sx={{lineHeight: 1.6, marginBottom: 2}}>
                    {review.review.description}
                </Typography>
                {review.review.tags.map(t =>
                    <Chip label={t} size="small" variant="outlined" sx={{marginRight: 1}}/>
                )}
                <Divider sx={{marginTop: 3, marginBottom: 3}}/>
            </Box>
        </Box>
    )
}

Review.propTypes = {
    review: shape({
        reviewer: shape({
            name: string,
            image: string,
            lengthOfResidence: number
        }),
        review: shape({
            title: string,
            description: string,
            rent: number,
            utilities: number,
            wouldLiveHereAgain: bool,
            tags: arrayOf(string)
        }),
        score: shape({
            overall: number
        }),
        likes: number,
        dislikes: number,
        id: number,
        date: string
    })
}