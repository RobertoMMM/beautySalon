import { NavLink, Outlet } from "react-router-dom";
import womenImage from "assets/women.png";
import dropdownImage from "assets/dropdown.png";
import "./style.css";
import CustomButton from "../modules/button";
import { useAppDispatch } from "store";
import { getUserName, onLogout } from "store/slices/auth";
import { AppBar } from "@mui/material";
import { useSelector } from "react-redux";

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
  const dispatch = useAppDispatch();

  const navStyles = {
    height: "90px",
    background: "#ffffff",
    left: "0",
    top: "0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    zIndex: "2",
    color: "rgba(0, 0, 0, 0.6)",
  };

  const Navbar = () => {
    const userName = useSelector(getUserName)?.slice(0, 2) || "UK";

    return (
      <>
        <AppBar sx={navStyles} position="fixed">
          <img src={womenImage} alt="beautySalon" />
          <div className="title">
            <div className="main">PowerBeauty</div>
            <div className="secondary">Beauty is our duty</div>
          </div>
          <div className="utils">
            <CustomLink to="help" title="Help" />
            <CustomLink to="orders" title="Orders" />
            <div className="breakLine"></div>
            <div className="userProfile">{userName}</div>
            <div className="registration">Salon Registration</div>
            <div className="dropdown">
              <img src={dropdownImage} alt="dropdown" />
              <div className="dropdownContent">
                <CustomLink to="login" title="Login" />
                <CustomLink to="order/1" title="Order" />
                <CustomButton onClick={() => dispatch(onLogout())}>
                  Sign out
                </CustomButton>
              </div>
            </div>
          </div>
        </AppBar>
      </>
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
