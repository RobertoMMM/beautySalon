import List from "../../components/salon/list";
import { masters } from "./masters/store";
import { products } from "./products/store";
import { services } from "./services/store";
import "./home.css";

const Services = () => {
  return (
    <div className="services">
      <List items={services} title="Services"></List>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products">
      <List items={products} title="Products"></List>
    </div>
  );
};

const Masters = () => {
  return (
    <div className="masters">
      <List items={masters} title="Masters"></List>
    </div>
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
