import { masters } from "../../static/masters/store";
import "./home.css";
import List from "components/modules/salon/list";
import { products } from "static/products/store";
import { services } from "static/services/store";

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
