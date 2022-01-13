import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../../images/chair.png";
import Calender from "../../../Share/Calender/Calender";
const AppoinmentHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={15}>
        <Grid item xs={12} md={6} style={{ width: "100%" }}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={chair} alt="" srcset="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmentHeader;
