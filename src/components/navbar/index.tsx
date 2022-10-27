import { NavLink, Outlet } from "react-router-dom";
import womenImage from "assets/women.png";
import dropdownImage from "assets/dropdown.png";
import "./style.css";
import CustomButton from "../modules/button";
import useAuth from "hooks/useAuth";

const CustomLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive }) => (isActive ? "activeLink" : "link")}
    >
      {title}
    </NavLink>
  );
};

const Layout = () => {
  const { onLogout } = useAuth();

  const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={womenImage} alt="beautySalon" />
        <div className="title">
          <div className="main">PowerBeauty</div>
          <div className="secondary">Beauty is our duty</div>
        </div>
        <div className="utils">
          <CustomLink to="help" title="Help" />
          <CustomLink to="orders" title="Orders" />
          <div className="breakLine"></div>
          <div className="userProfile">RF</div>
          <div className="registration">Salon Registration</div>
          <div className="dropdown">
            <img src={dropdownImage} alt="dropdown" />
            <div className="dropdownContent">
              <CustomLink to="login" title="Login" />
              <CustomLink to="order/1" title="Order" />
              <CustomButton onClick={onLogout}>Sign out</CustomButton>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
