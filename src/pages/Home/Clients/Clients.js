import { Container } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  useEffect(() => {
    axios
      .get("https://squadrone.herokuapp.com/clients/")
      .then((result) => setClients(result.data));
  }, []);
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client._id}>
              <img src={client.imgUrl} alt="" />
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Clients;
