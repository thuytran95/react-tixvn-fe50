import React, { useState } from "react";

const Dropdown = ({ title, items, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const handelClick = (item) => {};
  return (
    <div className="dd-wrapper">
      {/* <div
        tabIndex={0}
        className="dd-header"
        rol="button"
        onKeyPress={() => toggle(!open)
      ></div> */}
    </div>
  );
};

export default Dropdown;
