import { Card, CardContent, Container, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		cssEase: "linear"
	};

	useEffect(() => {
		axios
			.get("https://shoesshop-server.herokuapp.com/reviews/")
			.then((result) => setReviews(result.data));
	}, []);
	return (
		<Box sx={{ py: 5 }}>
			<h2 style={{ textAlign: "center", marginBottom: "5px" }}>
				Our Clients Says
			</h2>
			<Container>
				<Slider {...settings}>
					{reviews.map((review) => (
						<div key={review._id}>
							<Card sx={{ display: "flex", justifyContent: "center" }}>
								<CardContent>
									<Typography
										sx={{ fontSize: 22, mb: 1.5 }}
										color="text.secondary"
										gutterBottom
									>
										{review.reviewerName}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										<Rating
											name="read-only"
											value={parseInt(review.reviewerRating)}
											readOnly
										/>
									</Typography>
									<Typography
										sx={{ mb: 1.5, fontSize: 18 }}
										color="text.secondary"
									>
										{review.reviewerMessage}
									</Typography>
								</CardContent>
							</Card>
						</div>
					))}
				</Slider>
			</Container>
		</Box>
	);
};

export default Reviews;
