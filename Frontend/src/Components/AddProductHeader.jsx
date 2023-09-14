import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function AddProductHeader({ children }) {
  return (
    <div className="header">
      <h2> Product Add </h2>
      <div className="buttons">
        <Button
          color={"green"}
          text={"Save"}
          type="submit"
          value="Save"
          //disabled={isLoading}
        />
        <Link to="/">
          <Button color={"red"} text={"Cancel"} type="Cancel" value="Cancel" />
        </Link>
      </div>
    </div>
  );
}

export default AddProductHeader;
