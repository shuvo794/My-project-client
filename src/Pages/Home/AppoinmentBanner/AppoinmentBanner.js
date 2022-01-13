import React from "react";
import Box from "@mui/material/Box";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const appoinmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,54,74,0.8)",
  backgroundBlendMode: "darken, luminosity",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  marginTop: 200,
};
const AppoinmentBanner = () => {
  return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "550px", marginTop: "-150px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              style={{ color: "#1bd1d6", marginBottom: "14px" }}
            >
              Appoinment
            </Typography>
            <Typography variant="h4" style={{ color: "#fff" }}>
              Make an Appoinment Today
            </Typography>
            <Typography
              variant="h4"
              style={{
                color: "#fff",
                fontSize: "14px",
                paddingBottom: "30px",
                paddingTop: "30px",

                fontWeight: "300",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
