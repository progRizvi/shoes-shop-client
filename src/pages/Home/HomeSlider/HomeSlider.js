import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomeSlider = () => {
	return (
		<Box
			sx={{
				background: "url('https://i.ibb.co/CtdHYKw/cover-2.jpg') bottom",
				height: "80vh",
			}}
		>
			<Container>
				<Grid container>
					<Grid item md={6}>
						<Typography
							variant="h3"
							component="div"
							color="white"
							sx={{ pt: 20 }}
						>
							We Can Make Your Celebration Extraordinary
						</Typography>
						<Typography
							variant="body1"
							component="div"
							color="white"
							sx={{ pt: 3 }}
						>
							Stay tuned to Sole Base's blog for fresh ladies' shoe & fashion tips, news, guides & listicles, updated monthly and crammed with exclusive goodies!
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default HomeSlider;
