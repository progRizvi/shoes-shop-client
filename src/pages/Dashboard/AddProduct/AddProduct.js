import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		const url = "https://shoesshop-server.herokuapp.com/products";
		axios.post(url, data).then((result) => {
			if (result.data.insertedId) {
				alert("Product Successfully Inserted.");
				reset();
			}
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container>
					<Grid container spacing={4} sx={{ width: "40%" }}>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("name", { required: true })}
								label="Title"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("image", { required: true })}
								label="Image Url"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("price", { required: true })}
								label="Price"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("countInStock")}
								label="In Stock"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("rating")}
								label="rating"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<TextField
								required
								{...register("numReviews")}
								label="Number of Reviews"
								variant="standard"
							/>
						</Grid>
						<Grid item sm={12} xs={12} md={12}>
							<TextField
								required
								{...register("description", { required: true })}
								multiline
								rows={4}
								label="Description"
							/>
						</Grid>
						<Grid item sm={6} xs={12} md={6}>
							<Button variant="contained" color="success" type="submit">
								Add Product
							</Button>
						</Grid>
					</Grid>
				</Container>
			</form>
		</>
	);
};

export default AddProduct;
