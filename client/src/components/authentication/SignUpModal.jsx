import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { RotatingLines } from "react-loader-spinner";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  display: "flex",
};

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone, setPhone] = useState(null);

  const { userLoading } = useSelector((state) => state.auth);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  //destructure
  const { name, email, password, gender } = formFields;

  // handle the change
  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    const frontendData = {
      myName: name,
      myEmail: email,
      myPassword: password,
      myPhone: phone,
      myGender: gender,
    };

    dispatch(registerUser(frontendData));
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ background: "#d1ff97" }}
        className="rounded-pill  login-btn px-4 border-0 text-dark fw-medium"
      >
        Sign Up
      </Button>
      <Modal
        sx={{ backdropFilter: "blur(3px)" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            className="shadow rounded-4 col-xl-5 col-lg-6 col-md-8 col-sm-9 d-flex flex-column justify-content-center col-12"
          >
            <div className="left">
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h2"
                className="text-center"
              >
                Sign Up
              </Typography>
              <form>
                <TextField
                  value={name}
                  onChange={handleChange}
                  sx={{ width: "100%", mt: 2 }}
                  id="standard-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  value={email}
                  onChange={handleChange}
                  sx={{ width: "100%", mt: 2 }}
                  id="standard-basic"
                  type="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                />
                <TextField
                  value={password}
                  onChange={handleChange}
                  sx={{ width: "100%", mt: 2 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                />
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
                <InputLabel sx={{ mt: 1 }} id="demo-simple-select-helper-label">
                  Gender
                </InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={gender}
                  label="Age"
                  onChange={handleChange}
                  name="gender"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
                <Button
                  onClick={handleSignUp}
                  variant="contained"
                  sx={{
                    width: "100%",
                    mt: 3,
                    background: "black",
                    borderRadius: 20,
                  }}
                >
                  {userLoading ? (
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
                    "Sign Up"
                  )}
                </Button>
              </form>
            </div>
            {/* <div className="right">
              <img
                width={"100%"}
                src="https://w0.peakpx.com/wallpaper/616/190/HD-wallpaper-eleanor-cars-classic-ford-mustang-mustangs-old.jpg"
                alt=""
              />
            </div> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
