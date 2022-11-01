import { masters } from "../../static/masters/store";
import List from "components/modules/salon/list";
import { products } from "static/products/store";
import { services } from "static/services/store";
import { Box } from "@mui/system";

const styledBoxItems = {
  position: "relative",
  top: "132px",
  width: "90%",
  left: "89px",
  marginBottom: "100px",
};

const Services = () => {
  return (
    <Box sx={styledBoxItems}>
      <List items={services} title="Services"></List>
    </Box>
  );
};

const Products = () => {
  return (
    <Box sx={styledBoxItems}>
      <List items={products} title="Products"></List>
    </Box>
  );
};

const Masters = () => {
  return (
    <Box sx={styledBoxItems}>
      <List items={masters} title="Masters"></List>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <Services />
      <Products />
      <Masters />
    </>
  );
};
export default Home;
