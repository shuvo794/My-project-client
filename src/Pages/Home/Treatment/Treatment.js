import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import treatment from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";
const Treatment = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 12 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <img style={{ width: "100%" }} src={treatment} alt="" srcset="" />
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
          }}
        >
          <Box sx={{ p: 5 }}>
            <Typography variant="h4" style={{ color: "#000", fontWeight: 500 }}>
              Expecitional Dental
              <br />
              Care On Your Team
            </Typography>

            <Typography
              variant="h6"
              style={{
                color: "gray",
                paddingTop: "36px",
                paddingBottom: "36px",
              }}
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, voluptatibus? Autem cum, porro vitae nisi dolor cupiditate reprehenderit officia, soluta dolorem fugit accusantium totam magnam nemo est, illum voluptas vel laborum optio ipsam. Tenetur dolores sit commodi vero unde. Minus hic officia, sapiente tempore iusto vero? Delectus repudiandae ratione culpa magni, porro quam tempora explicabo mollitia adipisci maxime provident magnam optio eum aut. Voluptates, impedit nulla minima velit quisquam, aut sint cum excepturi, aliquam modi quas nemo quis sit tenetur.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Treatment;
