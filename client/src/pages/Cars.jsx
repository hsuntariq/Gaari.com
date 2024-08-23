import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Cars = () => {
  const [formFields, setFormFields] = useState({
    brand: "",
    model: "",
    registered: "",
    mileage: "",
    fuel_average: "",
    color: "",
    price: "",
    cc: "",
    description: "",
  });

  const {
    brand,
    model,
    registered,
    mileage,
    fuel_average,
    color,
    price,
    cc,
    description,
  } = formFields;

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    setImage(file);
  };

  return (
    <>
      <Header />
      <div className="cont mx-auto col-lg-5 position-relative">
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <input
            required
            className="input"
            type="text"
            name="brand"
            id="brand"
            placeholder="brand"
            value={brand}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="number"
            name="model"
            id="model"
            placeholder="model"
            value={model}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="number"
            name="registered"
            id="registered"
            placeholder="registered"
            value={registered}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
            value={mileage}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="number"
            name="fuel_average"
            id="fuel_average"
            placeholder="fuel_average"
            value={fuel_average}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="color"
            name="color"
            id="color"
            placeholder="color"
            value={color}
            onChange={handleChange}
          />

          <input
            required
            className="input"
            type="number"
            name="price"
            id="price"
            placeholder="price"
            value={price}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="number"
            name="cc"
            id="cc"
            placeholder="cc"
            value={cc}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="text"
            name="description"
            id="description"
            placeholder="description"
            value={description}
            onChange={handleChange}
          />
          <input
            required
            className="input"
            type="file"
            name="image"
            id="image"
            placeholder="image"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img
              width={200}
              height={200}
              className="rounded-circle border border-info d-block my-3 mx-auto"
              src={imagePreview && imagePreview}
              alt=""
            />
          )}

          <button className="login-button" type="submit" value="Add Vehicle">
            Add Vehicle
          </button>
        </form>
      </div>
    </>
  );
};

export default Cars;
