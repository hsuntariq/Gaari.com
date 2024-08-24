import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addCarData, carReset } from "../features/cars/carSlice";
const Cars = () => {
  const dispatch = useDispatch();
  const { carLoading, carSuccess } = useSelector((state) => state.cars);
  const { user } = useSelector((state) => state.auth);

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
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (carSuccess) {
      toast.success("Uplaoded Successfully!");
      setFormFields({
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
      setImage(null);
      setImagePreview(null);
    }
    dispatch(carReset());
  }, [carSuccess, dispatch]);

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

  const handleImageUpload = async () => {
    // upload_preset = ls8frk5v
    // useranme = dwtsjgcyf

    let data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ls8frk5v");
    // request to the cloudinary API
    try {
      setImageLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload",
        data
      );
      setImageLoading(false);
      return response.data.url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imageUrl = await handleImageUpload(image);
    const frontendData = {
      user_id: user?._id,
      brand,
      model,
      registered,
      mileage,
      fuel_average,
      color,
      price,
      cc,
      description,
      image: imageUrl,
    };

    dispatch(addCarData(frontendData));
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

          <button onClick={handleClick} className="login-button">
            {imageLoading || carLoading ? (
              <>
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass="text-white bg-white"
                  strokeColor="white"
                />
              </>
            ) : (
              "Add Vehicle"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Cars;
