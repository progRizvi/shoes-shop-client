import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../Explore More/Product/Product";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("https://shoesshop-server.herokuapp.com/products")
			.then((result) => setProducts(result.data));
	}, []);
	return (
		<Box className="section">
			<Container>
				<Grid container spacing={2} sx={{ mt: 5 }} className="shopcontainer">
					{products.slice(0, 6).map((product) => (
						<Product product={product} key={product._id} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Products;
