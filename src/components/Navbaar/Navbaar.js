import react from "react";
// import LocationOnIcon from '@mui/icons-material/Location'
import {
  Box,
  Grid,
  Icon,
  InputAdornment,

  TextField,
  Typography,
  Container,
  Hidden
} from "@mui/material";
import logo from "./images/brand_logo.svg";
import gsp from "./images/gsp.svg";
import cart from "./images/mini-cart.svg";
import wishlist from "./images/wishlist-svg.svg";
import qr from "./images/qr.svg";
import profile from "./images/profile.svg";
import SearchIcon from "@mui/icons-material/Search";
import bg from "./images/headerMobile.svg";
import MenuIcon from '@mui/icons-material/Menu';
export const Navbaar = () => {
  return (
    <>
      <Box sx={style.navDiv}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                // width:"70%",
                fontSize: " 13px",
                color: "white",
              }}
            >
              Gemlay By Garnet Lanee
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                fontWeight: 700,
              }}
            >
              Pincode
            </Typography>
            {/* <Icon><LocationOnIcon/></Icon> */}
          </Box>
        </Box>
      </Box>
      <Hidden smUp>
        <Box sx={{
          height: "80px",
          display: "flex",
          backgroundSize: "cover",
          backgroundPosition: " center 80px",
          zIndex: 1000,
          backgroundImage: `url(${bg})`,
          padding: "0px !important",
          alignItems: "center",
          justifyContent: "space-between",
          padding:"0px 10px"
        }}>
          <MenuIcon />
          <img src={logo} style={{ width: "200px", height: "40px" }}></img>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            gap:"4px"
          }}>
            <SearchIcon />
            <img src={wishlist} style={{ height: "25px", width: "25px" }}></img>
            <img src={cart} style={{ height: "25px", width: "25px" }}></img>
          </Box>
        </Box>
      </Hidden>
      <Hidden smDown>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            background: "rgba(0, 213, 172, 0.03)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 1px 0px",
            Zindex: "12",
            position: "relative",
            padding: "18px 0px",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Grid item style={{ width: "20%" }}>
              <img src={logo} style={{ width: "200px", height: "40px" }}></img>
            </Grid>
            <Grid item style={{ width: "30%" }}>
              {/* search */}
              <TextField
                sx={{ width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                      Search Products...
                    </InputAdornment>
                  ),
                  style: {
                    border: "2px solid rgb(0, 122, 100)",
                    borderRadius: "16px",
                    height: "40px",

                    backgroundColor: "white",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "35%",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 7px",
                  width: "16%",
                  borderRight: "1px solid rgb(239, 239, 239)",
                }}
              >
                <img src={gsp} style={{ height: "25px", width: "25px" }}></img>
                <Typography
                  sx={{
                    color: "rgb(0, 0, 0)",
                    fontSize: "11px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  GSP
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 7px",
                  width: "16%",
                  borderRight: "1px solid rgb(239, 239, 239)",
                }}
              >
                <img
                  src={wishlist}
                  style={{ height: "25px", width: "25px" }}
                ></img>
                <Typography
                  sx={{
                    color: "rgb(0, 0, 0)",
                    fontSize: "11px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  WISHLIST
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 7px",
                  width: "16%",
                  borderRight: "1px solid rgb(239, 239, 239)",
                }}
              >
                <img src={cart} style={{ height: "25px", width: "25px" }}></img>
                <Typography
                  sx={{
                    color: "rgb(0, 0, 0)",
                    fontSize: "11px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  CART
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 7px",
                  width: "16%",
                  borderRight: "1px solid rgb(239, 239, 239)",
                }}
              >
                <img src={qr} style={{ height: "25px", width: "25px" }}></img>
                <Typography
                  sx={{
                    color: "rgb(0, 0, 0)",
                    fontSize: "11px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  VERIFY REPORT
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15%",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={profile} style={{ height: "40px", width: "40px" }} />
              <Typography
                style={{
                  color: "rgb(44, 56, 117)",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                Sing In
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
      <Hidden smDown>
        <Box
          style={{
            background: "rgb(255, 255, 255)",
            padding: "0px 15px",
            position: "relative",
            boxShadow: " rgba(0, 0, 0, 0.25) 0px 2px 2px 0px",
          }}
        >
          <Box

            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "rgb(255, 255, 255)",
              padding: " 13px 0px",
            }}
          >
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              RINGS
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              EARRINGS
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              PENDANTS
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              BRACELETS & BANGLES
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              GOLD COINS
            </Typography>
            <Typography
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              ALL JEWELLERY
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

const style = {
  navDiv: {
    width: "100%",

    background:
      "linear-gradient(90deg, rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%)",
    padding: "5px 0px",
  },
};
