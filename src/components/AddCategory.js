import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      //validamos que el texto sea mayor que 2 y quitamos espacion en blanco
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
      console.log("handle submit");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p> {inputValue} </p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
