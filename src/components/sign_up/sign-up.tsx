import { Box, Button, Paper, Typography } from "@mui/material";
import signUpStyles from "./sign-up.styles";
import { Component, FormEvent } from "react";
import loginAndRegisterImage from "../../assets/register_and_login_page_logo.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { localStorageParsedData, userObject } from "../localstoragedata";

interface state {
  userNo: number;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  arrayOfUsers: userObject[];
  emailErrorMsg: string;
  userNameErrMsg: string;
  passwordErrMsg: string;
  confirmPasswordErrMsg: string;
  formMsg: string;
}

class Signup extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userNo: localStorageParsedData ? localStorageParsedData.length + 1 : 1,
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      arrayOfUsers: localStorageParsedData ? localStorageParsedData : [],
      emailErrorMsg: "",
      userNameErrMsg: "",
      passwordErrMsg: "",
      confirmPasswordErrMsg: "",
      formMsg: "",
    };
  }

  passwordVisibilityIconHandler = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  confirmPasswordVisibilityIconHandler = () => {
    this.setState((prevState) => ({
      isConfirmPasswordVisible: !prevState.isConfirmPasswordVisible,
    }));
  };

  handleChange = (e: { target: { name: string; value: string } }) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  validateEmail = () => {
    // console.log("validateEmailCalled");
    const { email, arrayOfUsers } = this.state;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    switch (true) {
      case email === "":
        this.setState({ emailErrorMsg: "Email is required" }, () => {
          this.validateUsername();
        });
        break;
      case !emailRegex.test(email):
        this.setState({ emailErrorMsg: "Enter Valid email" }, () => {
          this.validateUsername();
        });
        break;
      default:
        // console.log(arrayOfUsers);
        if (arrayOfUsers.length > 0) {
          const userObject = arrayOfUsers.find(
            (eachUser) => eachUser.userEmail === email
          );
          console.log(userObject);
          if (userObject !== undefined) {
            this.setState({ emailErrorMsg: "Email Already Exist" }, () => {
              this.validateUsername();
            });
          } else {
            // console.log("email else block");
            this.setState({ emailErrorMsg: "" }, () => {
              this.validateUsername();
            });
          }
        } else {
          // console.log("email else block");
          this.setState({ emailErrorMsg: "" }, () => {
            this.validateUsername();
          });
        }
        break;
    }
  };

  validateUsername = () => {
    // console.log("validateUsernameCalled");
    const { userName, arrayOfUsers } = this.state;

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
        if (arrayOfUsers.length > 0) {
          const userObject = arrayOfUsers.find(
            (eachUser) => eachUser.userName === userName
          );
          if (userObject !== undefined) {
            this.setState({ userNameErrMsg: "username already exist" }, () => {
              this.validatePassword();
            });
          } else {
            this.setState({ userNameErrMsg: "" }, () => {
              this.validatePassword();
            });
          }
        } else {
          this.setState({ userNameErrMsg: "" }, () => {
            this.validatePassword();
          });
        }
        break;
    }
  };

  validatePassword = () => {
    // console.log("validatePasswordCalled");
    const { password } = this.state;

    switch (true) {
      case password === "":
        this.setState({ passwordErrMsg: "Password is required" }, () => {
          this.validateConfirmPassword();
        });
        break;

      case password.length < 6:
        this.setState(
          {
            passwordErrMsg: "Password must be at least 6 characters",
          },
          () => {
            this.validateConfirmPassword();
          }
        );
        break;
      default:
        const passwordRegex =
          /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        const isValidPassword: boolean = passwordRegex.test(password);
        if (isValidPassword === false) {
          this.setState(
            {
              passwordErrMsg:
                "Password should contain at least one uppercase, one lowercase letter, one number AND one special character.",
            },
            () => {
              this.validateConfirmPassword();
            }
          );
        } else {
          // console.log("password else block");
          this.setState(
            {
              passwordErrMsg: "",
            },
            () => {
              this.validateConfirmPassword();
            }
          );
        }
        break;
    }
  };

  validateConfirmPassword = () => {
    // console.log("validateConfirmpasswordCalled");
    const { password, confirmPassword } = this.state;

    switch (true) {
      case confirmPassword === "":
        this.setState({
          confirmPasswordErrMsg: "confirm password is required",
        });
        break;
      case password !== confirmPassword:
        this.setState({ confirmPasswordErrMsg: "Passwords must match" });
        break;
      default:
        // console.log("confirm password default block");
        this.setState({ confirmPasswordErrMsg: "" }, () => {
          if (
            this.state.emailErrorMsg === "" &&
            this.state.userNameErrMsg === "" &&
            this.state.passwordErrMsg === "" &&
            this.state.confirmPasswordErrMsg === ""
          )
            this.updateData();
        });
        break;
    }
  };

  updateData = () => {
    console.log("updatedata called");

    const newUserObject = {
      userId: this.state.userNo,
      userEmail: this.state.email,
      userName: this.state.userName,
      userPassword: this.state.password,
    };

    localStorage.setItem(
      "usersArray",
      JSON.stringify([...this.state.arrayOfUsers, newUserObject])
    );

    this.setState(
      (prevState) => ({
        arrayOfUsers: [...prevState.arrayOfUsers, newUserObject],
        formMsg: "User Created Successfully",
      }),
      () => {
        this.setState((prevState) => ({
          userNo: prevState.arrayOfUsers.length + 1,
        }));
      }
    );
  };

  onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.validateEmail();
  };

  render() {
    const {
      email,
      userName,
      password,
      confirmPassword,
      isPasswordVisible,
      isConfirmPasswordVisible,
      emailErrorMsg,
      userNameErrMsg,
      passwordErrMsg,
      confirmPasswordErrMsg,
      formMsg,
    } = this.state;

    // console.log(this.state);

    return (
      <Box sx={signUpStyles.mainContainer}>
        <Box sx={signUpStyles.logoText}>Your Logo</Box>
        <Box sx={signUpStyles.parentContainer}>
          <Box sx={signUpStyles.childContainer}>
            <Paper sx={signUpStyles.signUpContainer}>
              <Box sx={signUpStyles.signUpChildContainer}>
                <Box sx={signUpStyles.welcomeText}>Welcome !</Box>
                <Box sx={signUpStyles.signinTextContainer}>
                  <Box sx={signUpStyles.signintoText}>Sign up to</Box>
                  <Box sx={signUpStyles.loremText}>Lorem Ipsum is simply</Box>
                </Box>
                <Box
                  sx={signUpStyles.formContainer}
                  component="form"
                  onSubmit={this.onSubmitForm}
                >
                  <Box sx={signUpStyles.inputLabelContainer}>
                    <Box sx={signUpStyles.labelText}>Email</Box>
                    <Box sx={signUpStyles.inputContainer}>
                      <Box
                        sx={signUpStyles.inputEl}
                        component="input"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        name="email"
                        onChange={this.handleChange}
                      />
                    </Box>
                    {emailErrorMsg && (
                      <Typography sx={signUpStyles.errorMsgText}>
                        {emailErrorMsg}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={signUpStyles.inputLabelContainer}>
                    <Box sx={signUpStyles.labelText}>user name</Box>
                    <Box sx={signUpStyles.inputContainer}>
                      <Box
                        sx={signUpStyles.inputEl}
                        component="input"
                        placeholder="Enter your username"
                        type="text"
                        value={userName}
                        name="userName"
                        onChange={this.handleChange}
                      />
                    </Box>
                    {userNameErrMsg && (
                      <Typography sx={signUpStyles.errorMsgText}>
                        {userNameErrMsg}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={signUpStyles.inputLabelContainer}>
                    <Box sx={signUpStyles.labelText}>Password</Box>
                    <Box sx={signUpStyles.inputContainer}>
                      <Box
                        sx={signUpStyles.inputEl}
                        component="input"
                        placeholder="Enter your Password"
                        type={isPasswordVisible ? "password" : "text"}
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                      />
                      {isPasswordVisible ? (
                        <VisibilityOffIcon
                          sx={signUpStyles.eye}
                          onClick={this.passwordVisibilityIconHandler}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={signUpStyles.eye}
                          onClick={this.passwordVisibilityIconHandler}
                        />
                      )}
                    </Box>
                    {passwordErrMsg && (
                      <Typography sx={signUpStyles.errorMsgText}>
                        {passwordErrMsg}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={signUpStyles.inputLabelContainer}>
                    <Box sx={signUpStyles.labelText}>Confirm Password</Box>
                    <Box sx={signUpStyles.inputContainer}>
                      <Box
                        sx={signUpStyles.inputEl}
                        component="input"
                        placeholder="Confirm your Password"
                        type={isConfirmPasswordVisible ? "password" : "text"}
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleChange}
                      />
                      {isConfirmPasswordVisible ? (
                        <VisibilityOffIcon
                          sx={signUpStyles.eye}
                          onClick={this.confirmPasswordVisibilityIconHandler}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={signUpStyles.eye}
                          onClick={this.confirmPasswordVisibilityIconHandler}
                        />
                      )}
                    </Box>
                    {confirmPasswordErrMsg && (
                      <Typography sx={signUpStyles.errorMsgText}>
                        {confirmPasswordErrMsg}
                      </Typography>
                    )}
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={signUpStyles.formBtn}
                  >
                    Register
                  </Button>
                  {formMsg && (
                    <Typography sx={signUpStyles.errorMsgText}>
                      {formMsg}
                    </Typography>
                  )}
                </Box>
                <Box sx={signUpStyles.haveContainer}>
                  Already have an Account ?
                  <Box sx={signUpStyles.register} component="span">
                    Login
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Box sx={signUpStyles.imgContainer}>
              <Box component="img" sx={signUpStyles.img} src={loginAndRegisterImage} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Signup;