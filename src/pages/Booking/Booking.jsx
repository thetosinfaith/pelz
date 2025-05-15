import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className="booking-container">
      <InlineWidget url="https://calendly.com/chikaibeh43/dfys?month=2025-03" />
    </div>
  );
};

export default Booking;
