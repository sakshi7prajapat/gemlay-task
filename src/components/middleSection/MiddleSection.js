import { Container, Box, Grid, Typography, TextField, InputAdornment, MenuItem, Select, FormControl, Hidden } from "@mui/material";
import ring from "./images/Chavvi-Diamond-Ring_YA.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from "react";
function MiddleSection() {
  return (
    <>
      <Box style={{ minHeight: "100vh", padding: "45px 0px" }}>
        <Container maxWidth="xl" sx={{ width: "100%", height: "100vh" }}>
          <Grid
          container
          
          >
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              item
              sx={{
                width: "30%",
                position: "relative",
                // minHeight: "100vh",
                border: "1px solid rgb(239, 239, 239)",
                padding: "20px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <img src={ring} style={{ height: "350px", width: "350px" }} />
            </Grid>
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                width: "60%",
                display: "flex",
                flexDirection:"column",
                padding: "23px 0px 0px 0px",
                borderRadius: "5px",
                justifyContent: "space-between",
                // padding:"4px 4px 0px 4px",
                // border:'2px solid black',
                background:
                  "linear-gradient(rgba(241, 255, 253, 0.5) 60%, rgb(248, 248, 248) 100%)",
                position: "relative",
              }}
            >
              <Box sx={{
                paddingLeft:"40px",
                paddingRight:"40px"
              }}>
              <Grid container>
              <Grid
                item
                lg={6} md={12} sm={12} xs={12}
                sx={{
                  width: "55%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "1px",
                    margin: "0px 0px 10px",
                  }}
                >
                  Chavvi Diamond Ring
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(0, 100, 82)",
                    fontSize: "18px",
                    fontWeight: 800,
                    lineHeight: "normal",
                  }}
                >
                  29,8900
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(0, 0, 0)",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  MRP Include all takes
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      paddingBottom: "15px",
                    }}
                  >
                    <strong>Karat:</strong>18k
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: " 12px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgb(229, 229, 229)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgb(44, 44, 44)",
                        padding: "5px",
                      }}
                    >
                      14k
                    </div>
                    <div
                      style={{
                        border: "1px solid rgb(229, 229, 229)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgb(44, 44, 44)",
                        padding: "5px",
                      }}
                    >
                      18k
                    </div>
                  </div>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      paddingBottom: "15px",
                    }}
                  >
                    <strong>Diamond Original:</strong>Natural
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: " 12px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgb(1, 36, 51)",
                        color: "rgb(1, 36, 51)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "5px",
                        minHeight: "30px",
                        minWidth: "30px",
                        width: "90px",
                        textAlign: "center",
                        alignContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      Natural
                    </div>
                  </div>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      paddingBottom: "15px",
                    }}
                  >
                    <strong>Diamond Quality:</strong>|J-S|
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: " 12px",
                      marginBottom: "15px",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid rgb(1, 36, 51)",
                        color: "rgb(1, 36, 51)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "5px",
                        minHeight: "30px",
                        minWidth: "30px",
                        width: "90px",
                        textAlign: "center",
                        alignContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      |J-S|
                    </div>
                    <div
                      style={{
                        border: "1px solid rgb(1, 36, 51)",
                        color: "rgb(1, 36, 51)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "5px",
                        minHeight: "30px",
                        minWidth: "30px",
                        width: "90px",
                        textAlign: "center",
                        alignContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      EF-VVS
                    </div>
                    <div
                      style={{
                        border: "1px solid rgb(1, 36, 51)",
                        color: "rgb(1, 36, 51)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "5px",
                        minHeight: "30px",
                        minWidth: "30px",
                        width: "90px",
                        textAlign: "center",
                        alignContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      GH-VVS
                    </div>
                    <div
                      style={{
                        border: "1px solid rgb(1, 36, 51)",
                        color: "rgb(1, 36, 51)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "5px",
                        minHeight: "30px",
                        minWidth: "30px",
                        width: "90px",
                        textAlign: "center",
                        alignContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      GH-VS/S
                    </div>
                  </div>
                </Box>
              </Grid>

              <Grid item lg={6} md={12} sm={12} xs={12} sx={
                {
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px"
                }
              }>
                <Box sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "4px",
                  marginBottom: "50px"
                }}>
                  <FavoriteIcon />
                  <ShareIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      // paddingBottom: "15px",
                    }}
                  >
                    <strong>Metal:</strong>yellow gold
                  </Typography>
                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%"
                }}>
                  <button style={{
                    height: " 22px",
                    width: " 22px",
                    background: "rgb(255, 222, 106)",
                    borderRadius: "100px",
                    border: "none"
                  }} />
                  <button style={{
                    height: " 22px",
                    width: " 22px",
                    background: "rgb(194, 192, 192)",
                    borderRadius: "100px",
                    border: "none"
                  }} />
                  <button style={{
                    height: " 22px",
                    width: " 22px",
                    background: "rgb(191, 121, 110",
                    borderRadius: "100px",
                    border: "none"
                  }} />
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "25%"
                }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      // paddingBottom: "15px",
                    }}
                  >
                    <strong>Size:</strong>12
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{
                        borderRadius: "16px",
                        height: "40px",
                        backgroundColor: "white",
                        // width: "80%"
                      }}
                    >
                      <MenuItem value={10}>13</MenuItem>
                      <MenuItem value={20}>14</MenuItem>
                      <MenuItem value={30}>15</MenuItem>
                    </Select>
                  </FormControl>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "end",
                    color: "rgb(18, 86, 74)",
                    fontSize: "9px",
                    marginRight: "10px",
                    fontWeight: 700,
                    // paddingTop: "5px",
                    cursor: "pointer"
                  }}>
                    Not Sure about Ring Size ?
                  </Box>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "25%"
                }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(44, 44, 44)",
                      // paddingBottom: "15px",
                    }}
                  >
                    <strong>Delivery & Store Details</strong>
                  </Typography>
                  <TextField
                    placeholder="Enter Pincode"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocationOnIcon />
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
                  <Box sx={{
                    display: "flex",
                    justifyContent: "end",
                    color: "rgb(1, 36, 51)",
                    fontSize: "13px",
                    marginRight: "10px",
                    fontWeight: 500,
                    // paddingTop: "5px",
                    cursor: "pointer"
                  }}>
                    Locate me
                  </Box>
                </Box>
              </Grid>
              </Grid>
              </Box>
              <Hidden smDown>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width:"100%",
                marginTop:"40px"
              }}>
                <Box sx={{
                  background: "linear-gradient(rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%)",
                  width:" 45%",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "18px",
                  color: "rgb(255, 255, 255)",
                  letterSpacing: "1px",
                  borderRadius: "0px 20px 0px 0px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>ADD To WISHLIST</Box>
                <Box sx={{
                  background: "linear-gradient(rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%)",
                  width:" 45%",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "18px",
                  color: "rgb(255, 255, 255)",
                  letterSpacing: "1px",
                  borderRadius: "20px 0px 0px 0px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>Checking Availbility</Box>
              </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MiddleSection;
