import { Box, Button, Paper, Typography } from "@mui/material";
import signInStyles from "./sign-in.styles";
import React, { Component } from "react";
import loginAndRegisterImage from "../../assets/register_and_login_page_logo.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { localStorageParsedData } from "../localstoragedata";

interface state {
  userName: string;
  password: string;
  isPasswordVisible: boolean;
  userNameErrMsg: string;
  passwordErrMsg: string;
  authenticateText: string;
}

class Signin extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isPasswordVisible: false,
      userName: "",
      password: "",
      userNameErrMsg: "",
      passwordErrMsg: "",
      authenticateText: "",
    };
  }

  passwordVisibleOrNotEventHandler = () => {
    const isPasswordVisible = this.state.isPasswordVisible;
    this.setState({ isPasswordVisible: !isPasswordVisible });
  };

  inputEventhandlerOnchange = (e: {
    target: { name: string; value: string };
  }) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  getUserObjectfromLocalStorageDataArray = () => {
    const userObject = localStorageParsedData.find(
      (eachUser) => eachUser.userName === this.state.userName
    );
    return userObject;
  };

  validateUserName = () => {
    // console.log("kjvblzjkvb");
    const { userName } = this.state;
    switch (true) {
      case userName.trim() === "":
        this.setState({ userNameErrMsg: "Username is required" }, () => {
          this.validatePassword();
        });
        break;
      case userName.trim().length < 6:
        this.setState(
          { userNameErrMsg: "Username should be atleast 6 characters" },
          () => {
            this.validatePassword();
          }
        );
        break;
      default:
        if (localStorageParsedData.length > 0) {
          if (this.getUserObjectfromLocalStorageDataArray() === undefined) {
            this.setState(
              { userNameErrMsg: "username didn't exist / Invalid user" },
              () => {
                this.validatePassword();
              }
            );
          } else {
            this.setState({ userNameErrMsg: "" }, () => {
              this.validatePassword();
            });
          }
        }
        break;
    }
  };

  validatePassword = () => {
    const { password } = this.state;
    switch (true) {
      case password.trim() === "":
        this.setState({ passwordErrMsg: "Password is required" });
        break;
      case password.trim().length < 6:
        this.setState({
          passwordErrMsg: "Password must be at least 6 characters",
        });
        break;
      default:
        if (localStorageParsedData.length > 0) {
          const userObject = this.getUserObjectfromLocalStorageDataArray();
          if (password !== userObject?.userPassword) {
            this.setState({ passwordErrMsg: "Invalid password" });
          } else {
            this.setState({ passwordErrMsg: "" }, () => {
              if (
                this.state.userNameErrMsg === "" &&
                this.state.passwordErrMsg === ""
              )
                this.navigateUserToHomePage();
            });
          }
        }

        break;
    }
  };

  navigateUserToHomePage = () => {
    this.setState({ authenticateText: "Login Successful" });
  };

  submitEventhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.validateUserName();
  };

  render() {
    const {
      isPasswordVisible,
      userName,
      password,
      userNameErrMsg,
      passwordErrMsg,
      authenticateText,
    } = this.state;
    return (
      <Box sx={signInStyles.mainContainer}>
        <Box sx={signInStyles.logoText}>Your Logo</Box>
        <Box sx={signInStyles.parentContainer}>
          <Box sx={signInStyles.childContainer}>
            <Paper sx={signInStyles.signUpContainer}>
              <Box sx={signInStyles.signUpChildContainer}>
                <Box sx={signInStyles.welcomeText}>Welcome !</Box>
                <Box sx={signInStyles.signinTextContainer}>
                  <Box sx={signInStyles.signintoText}>Sign in to</Box>
                  <Box sx={signInStyles.loremText}>Lorem Ipsum is simply</Box>
                </Box>
                <Box
                  sx={signInStyles.formContainer}
                  component="form"
                  onSubmit={this.submitEventhandler}
                >
                  <Box sx={signInStyles.inputLabelContainer}>
                    <Box sx={signInStyles.labelText}>User name</Box>
                    <Box sx={signInStyles.inputContainer}>
                      <Box
                        sx={signInStyles.inputEl}
                        component="input"
                        placeholder="Enter your username"
                        onChange={this.inputEventhandlerOnchange}
                        name="userName"
                        type="text"
                        value={userName}
                      />
                    </Box>
                    {userNameErrMsg && (
                      <Typography component="p" sx={signInStyles.errorMsgText}>
                        {userNameErrMsg}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Box sx={signInStyles.inputLabelContainer}>
                      <Box sx={signInStyles.labelText}>Password</Box>
                      <Box sx={signInStyles.inputContainer}>
                        <Box
                          sx={signInStyles.inputEl}
                          component="input"
                          placeholder="Enter your Password"
                          type={isPasswordVisible ? "password" : "text"}
                          onChange={this.inputEventhandlerOnchange}
                          name="password"
                          value={password}
                        />
                        {isPasswordVisible ? (
                          <VisibilityOffIcon
                            sx={signInStyles.eye}
                            onClick={this.passwordVisibleOrNotEventHandler}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={signInStyles.eye}
                            onClick={this.passwordVisibleOrNotEventHandler}
                          />
                        )}
                      </Box>
                      {passwordErrMsg && (
                        <Typography
                          component="p"
                          sx={signInStyles.errorMsgText}
                        >
                          {passwordErrMsg}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={signInStyles.rememberContainer}>
                      <Box sx={signInStyles.labelContainer}>
                        <Box
                          sx={signInStyles.checkbox}
                          component="input"
                          placeholder="Enter your Password"
                          type="checkbox"
                          id="checkbox"
                        />
                        <Box
                          component="label"
                          sx={signInStyles.remember}
                          htmlFor="checkbox"
                        >
                          Rememebr me
                        </Box>
                      </Box>
                      <Box sx={signInStyles.forget}>Forgot Password ?</Box>
                    </Box>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={signInStyles.formBtn}
                  >
                    Login
                  </Button>
                </Box>
                {authenticateText && (
                  <Typography sx={signInStyles.errorMsgText}>
                    {authenticateText}
                  </Typography>
                )}
                <Box sx={signInStyles.haveContainer}>
                  Don't have an Account ?
                  <Box sx={signInStyles.register} component="span">
                    Register
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Box sx={signInStyles.imgContainer}>
              <Box component="img" sx={signInStyles.img} src={loginAndRegisterImage} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Signin;