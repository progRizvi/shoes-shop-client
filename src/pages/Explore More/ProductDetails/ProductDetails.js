import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Topbar from "../../../shared/Topbar/Topbar";

const ProductDetails = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const { user } = useAuth();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`https://shoesshop-server.herokuapp.com/products/${productId}`)
			.then((result) => {
				setProduct(result.data);
			});
	}, [productId]);
	const handlePaymentBtn = () => {};
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		const newData = { ...data };
		newData.orderName = product.name;
		newData.orderImg = product.image;
		newData.status = "Pending";
		axios
			.post("https://shoesshop-server.herokuapp.com/orders", newData)
			.then((result) => {
				if (result.data.insertedId) {
					alert("Order Proccessing...");
					reset();
					history.push("/products");
				}
			});
	};
	return (
		<div>
			<Topbar />
			<Container>
				<Box sx={{ mt: 7 }}>
					<Grid container spacing={2}>
						<Grid item md={6} sm={12}>
							<Typography variant="h3">{product.name}</Typography>
							<img src={product.image} alt="" />
							<Box>
								<Typography variant="h6" sx={{ mt: 2 }}>
									Rating: {product.rating}
								</Typography>
								<Typography variant="h6" sx={{ mt: 2 }}>
									Count In Stock: {product.countInStock}
								</Typography>
								<Typography variant="h6" sx={{ mt: 2 }}>
									Price: ${product.price}
								</Typography>
								<Typography variant="body1" sx={{ mt: 2 }}>
									{product.description}
								</Typography>
							</Box>
						</Grid>

						{/* Order Confirmation Process */}

						<Grid item md={6} sm={12}>
							<Typography variant="h3" sx={{ mt: 5, textAlign: "center" }}>
								{" "}
								Delivery Details
							</Typography>
							<form
								onSubmit={handleSubmit(onSubmit)}
								style={{
									marginTop: "30px",
									display: "flex",
									flexDirection: "column"
								}}
							>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="Name"
									defaultValue={user.displayName}
									{...register("name")}
								/>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="Email"
									defaultValue={user.email}
									{...register("email")}
								/>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="Address"
									{...register("address")}
								/>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="City"
									{...register("city")}
								/>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="State"
									{...register("state")}
								/>
								<TextField
									margin="normal"
									variant="standard"
									required
									label="Zip Code"
									{...register("zipCode")}
								/>
								<Button
									type="submit"
									margin="normal"
									variant="contained"
									onClick={handlePaymentBtn}
								>
									Confirm
								</Button>
							</form>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default ProductDetails;
