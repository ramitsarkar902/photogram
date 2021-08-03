import React, { useState } from "react";

const PopUp = (error) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="popup-box">
      <div className="box">
        <h4>{error}</h4>
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
      </div>
    </div>
  );
};

export default PopUp;
