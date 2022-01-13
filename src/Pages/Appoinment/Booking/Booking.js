import { Button, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";
const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: "500" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Space is Avilable
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            Book Appoinment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        open={open}
        handleClose={handleClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
