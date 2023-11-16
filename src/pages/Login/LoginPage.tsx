import Box from "@mui/material/Box";
import React, { useEffect } from "react";

//import { Colors } from "chart.js";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Animate from "../../components/common/Animate";
import images from "../../assets/images";


const LoginPage = () => {
  const navigate = useNavigate();
  const [onRequest, setOnRequest] = React.useState(false);
  const [loginProgress, setLoginProgress] = React.useState(0);
  const [isloggedIn, setIsLoggedIn] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const onSignin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("login clicked  ");
    setOnRequest(true);
    const interval = setInterval(() => {
      //setLoginProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      setLoginProgress((prev) => prev + 100 / 40);
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2100);

    setTimeout(() => {
      navigate("/MainLayOut");
    }, 3300);
  };

  function onCheckedChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setChecked((prev) => !prev);
    console.log("checked=>", checked);
  }

  useEffect(() => {}, [checked]);

  let inputMethod: JSX.Element = <></>;
  if (checked) {
    inputMethod = (
      <Box>
        {" "}
        <TextField label="Scan ID Card" type="password" fullWidth></TextField>
      </Box>
    );
  } else {
    inputMethod = (
      <Box>
        <TextField label="username" fullWidth>
          {" "}
        </TextField>
        <TextField label="password" type="password" fullWidth></TextField>
        <Button
          type="submit"
          size="large"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 1,
            bgcolor: colors.blue[900],
            color: colors.common.white,
          }}
        >
          Login
        </Button>
      </Box>
    );
  }
  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* Barckground box*/}

      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // top={0}
          // left={0}
          // right={0}
          // bottom={0}
          // sx={{
          backgroundImage: `url(${images.images.loginBg})`,
          //
          // backgroundPosition:"center",
          // zIndex:-1
        }}
      />
      {/* Login Box */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: isloggedIn
            ? "100%"
            : { x1: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: isloggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* Logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.images.logo} alt="logo" width="100px" height={60} />
            </Animate>
          </Box>
          {/* Login Form */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box
                component="form"
                maxWidth={400}
                width="100%"
                onSubmit={onSignin}
              >
                <Stack spacing={3} sx={{ p: 5 }}>
                  {inputMethod}

                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="right"
                  >
                    <FormGroup>
                      <FormControlLabel
                        label="Use Barcode Scanner"
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={onCheckedChangeHandler}
                          />
                        }
                      />
                    </FormGroup>
                    {/* <Typography color="error" fontWeight="bold">
                                      <Link to="/forgot-password">Forgot Password?</Link>
                                  </Typography> */}
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>
          {/*footer       */}

          <Box sx={{ textAlign: "center", p: 5, zIndex: 2000 }}>
            <Animate type="fade" delay={1}>
              <Typography
                display="inline"
                fontWeight="bold"
                sx={{ "& > a": { color: colors.red[900], ml: "5px" } }}
              >
                 Massload &copy; 2023 All rights reserved
              </Typography>
            </Animate>
          </Box>
          {/* </Loading box> */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1000,
                bgcolors: colors.common.white,
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .$circlarProgressClasses.circle`]: {
                      strokeLinecap: "round",
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600],
                  }}
                />
              </Box>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
