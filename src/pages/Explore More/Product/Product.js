import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
	const { image, name, rating, _id, numReviews, price } = product;
	return (
		<>
			<Grid item xs={12} sm={6} md={6} lg={4} className="shop">
				<Box className="border-product">
					<NavLink to={`/products/${_id}`}>
						<div className="shopBack">
							<img src={image} alt={name} />
						</div>
					</NavLink>

					<Box className="shoptext">
						<Typography variant="body2">
							<NavLink to={`/products/${_id}`}>{name}</NavLink>
						</Typography>

						<Box sx={{ display: "flex" }}>
							<Rating name="read-only" value={rating} readOnly />
							<Typography variant="body2" sx={{ ml: 2 }}>
								{numReviews} reviews
							</Typography>
						</Box>
						<h3>${price}</h3>
					</Box>
				</Box>
			</Grid>
		</>
	);
};

export default Product;
