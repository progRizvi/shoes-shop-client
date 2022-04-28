import { Box } from "@mui/system";
import img from "../../imgs/404-Page.png";

const NotFound = () => {
  return (
    <Box sx={{ background: "white", height: "40vh" }}>
      <img style={{ width: "100%" }} src={img} alt="" />
    </Box>
  );
};

export default NotFound;
