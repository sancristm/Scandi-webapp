import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = ({ product, title, onAddProduct, onDelete }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <div className="buttons">
        <Link to="/AddProduct">
          <Button color={"green"} text={"Add Product"} onClick={onAddProduct} />
        </Link>
        <Link to="/MassDelete">
          <Button color={"red"} text={"Mass Delete"} onClick={onDelete} />
        </Link>
      </div>
    </div>
  );
};
Header.defaultProps = {
  title: "Product List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
