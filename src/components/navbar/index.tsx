import { NavLink, Outlet } from "react-router-dom";
import womenImage from "assets/women.png";
import dropdownImage from "assets/dropdown.png";
import { useAppDispatch } from "store";
import { getUserName, onLogout } from "store/slices/auth";
import { AppBar } from "@mui/material";
import { useSelector } from "react-redux";
import CustomButton from "components/common/button";
import { Box } from "@mui/joy";

const navStyles = {
  position: "fixed",
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
  img: {
    position: "absolute",
    width: "79px",
    height: "54px",
    left: "10px",
    top: "22px",
  },
};

const styledCompany = {
  color: "#5255c8",
  position: "absolute",
  width: "170px",
  height: "56.78px",
  left: "92.93px",
  top: "21.9px",
  "& .main": {
    fontSize: "34px",
    fontWeight: "600",
    letterSpacing: "0em",
  },
  "& .secondary": {
    position: "absolute",
    top: "42px",
    fontSize: "13.6px",
    lineHeight: "17px",
    letterSpacing: "-0.05em",
  },
};

const styledUtils = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "100px",
  gap: "20px",
  "& .breakLine": {
    width: "1px",
    height: "16px",
    background: "rgba(0, 0, 0, 0.38)",
  },
  "& .userProfile": {
    position: "relative",
    height: "32px",
    width: "32px",
    color: "#ffffff",
    textTransform: "uppercase",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    fontSize: "16px",
    backgroundColor: "#258750",
  },
  "& .registration": {
    width: "auto",
    height: "18px",
    fontSize: "14px",
  },
  "& .dropdown": {
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    img: {
      height: "15px",
      width: "15px",
      position: "relative",
      top: "0",
      left: "0",
    },
    ":hover > .dropdownContent": {
      display: "grid",
    },
    "& .dropdownContent": {
      position: "absolute",
      top: "55px",
      height: "auto",
      gridTemplateColumns: "1fr",
      backgroundColor: "#f9f9f9",
      minWidth: "100px",
      gap: ["10px", "20px"],
      display: "none",
      boxShadow: "0 0 5px -2px rgba(0, 0, 0, 0.96)",
      justifyItems: "center",
      alignItems: "center",
      padding: "10px 0 10px 0",
    },
  },
};

const styledContent = {
  position: "relative",
  top: "100px",
};

const styledLink = {
  display: "flex",
  justifyContent: "center",
  width: "82px",
  height: "24px",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "-0.03em",
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.6)",
};

const styledActiveLink = {
  ...styledLink,
  color: "#5255c8",
  borderBottom: "2px solid #5255c8",
};

const CustomLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <NavLink
      to={`/${to}`}
      style={({ isActive }) => (isActive ? styledActiveLink : styledLink)}
    >
      {title}
    </NavLink>
  );
};

const Layout = () => {
  const dispatch = useAppDispatch();

  const Navbar = () => {
    const userName = useSelector(getUserName)?.slice(0, 2) || "UK";

    const Utils = () => {
      return (
        <Box sx={styledUtils}>
          <CustomLink to="help" title="Help" />
          <CustomLink to="orders" title="Orders" />
          <Box className="breakLine"></Box>
          <Box className="userProfile">{userName}</Box>
          <Box className="registration">Salon Registration</Box>
          <Box className="dropdown">
            <img src={dropdownImage} alt="dropdown" />
            <Box className="dropdownContent">
              <CustomLink to="login" title="Login" />
              <CustomLink to="order/1" title="Order" />
              <CustomButton
                sx={{ width: 90 }}
                onClick={() => dispatch(onLogout())}
              >
                Sign out
              </CustomButton>
            </Box>
          </Box>
        </Box>
      );
    };

    const Company = () => {
      return (
        <>
          <img src={womenImage} alt="beautySalon" />
          <Box sx={styledCompany}>
            <Box className="main">PowerBeauty</Box>
            <Box className="secondary">Beauty is our duty</Box>
          </Box>
        </>
      );
    };

    return (
      <>
        <AppBar sx={navStyles}>
          <Company />
          <Utils />
        </AppBar>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Box sx={styledContent}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
