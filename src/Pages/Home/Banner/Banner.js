import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
const bannerBd = {
  background: `url(${bg})`,
};
const vertical = {
  display: "flex",
  alignItems: "center",
  height: 400,
};
const Banner = () => {
  return (
    <Container style={bannerBd} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...vertical, textAlign: "left" }} item xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your new Smile
              <br />
              start here
              <br />
            </Typography>
            <br />
            <Typography
              variant="h6"
              sx={{ my: 3, fontWeight: 300, fontSize: "14px", color: "gray" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              ullam vel reiciendis eos alias repellendus facere harum explicabo,
              recusandae porro.
            </Typography>
            <br />
            <Button variant="contained">Get appoinment</Button>
          </Box>
          <br />
        </Grid>
        <Grid item xs={12} md={6} style={vertical}>
          <img style={{ width: "450px" }} src={chair} alt="" srcset="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
