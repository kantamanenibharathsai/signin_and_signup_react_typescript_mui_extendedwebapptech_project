const signInStyles = {
    mainContainer: {
      //     display: 'grid',
      //    gridTemplateColumns : {md : "repeat(2, 1fr )"},
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  
    logoText: {
      marginTop: "20px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
      fontSize: "15px",
      width: "100%",
      color: "#000000",
      // marginLeft: "20px",
      // border: "1px solid green",
      paddingLeft: "15px",
    },
  
    parentContainer: {
      width: "100%",
      flexGrow: "1",
      // border: "5px solid pink",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  
    childContainer: {
      display: "grid",
      gridTemplateColumns: { md: "repeat(2, 47%)" },
      width: { xs: "96%", sm: "90%" },
      margin: "auto",
      // padding: { xs: "10px", sm: "30px", md: "60px", lg: "80px", xl: "120px" },
      // border: "1px solid red",
      justifyContent: { md: "space-between" },
    },
  
    signUpContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "60px 0px",
      border: "0.5px solid #ebebeb",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      // width: "100%",
    },
  
    signUpChildContainer: {
      width: "90%",
      margin: "auto",
      // border: "1px solid green",
    },
  
    welcomeText: {
      marginBottom: "30px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "18px",
      color: "#000000",
      opacity: 0.7,
    },
  
    signinTextContainer: {
      marginBottom: "30px",
      display: "grid",
      gap: "4px",
    },
  
    signintoText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
      fontSize: "24px",
      color: "#000000",
      opacity: 0.8,
    },
  
    loremText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      fontSize: "13px",
      color: "#000000",
      opacity: 0.7,
    },
  
    formContainer: {
      // border: "1px solid red",
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
  
    inputLabelContainer: {
      // border: "2px solid pink",
      display: "grid",
      gap: "8px",
    },
  
    labelText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      fontSize: "13px",
      color: "#000000",
      opacity: 0.8,
    },
  
    inputContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      border: "1px solid #282828",
      height: "42px",
    },
  
    inputEl: {
      color: "black",
      fontSize: "13px",
      "::placeholder": {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "300",
        fontSize: "13px",
        color: "#ababab",
      },
      outline: "none",
      height: "40px",
      flexGrow: "1",
      paddingLeft: "13px",
      border: "none",
    },
  
    eye: {
      color: "#000000",
      marginRight: "18px",
    },
  
    formBtn: {
      backgroundColor: "#000000",
      borderRadius: "6px",
      alignSelf: "strech",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "24px",
      color: "#ffffff",
      textTransform: "none",
      height: "40px",
      opacity: 0.9,
    },
  
    rememberContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      // border: "1px solid red",
      marginTop: "15px",
    },
    labelContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // border: "1px solid red",
      gap: "5px",
    },
    forget: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "11px",
      lineHeight: "18px",
      color: "#4d4d4d",
    },
    remember: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "11px",
      lineHeight: "18px",
      color: "#000000",
    },
  
    checkbox: {
      borderRadius: "0px",
      border: "1px solid #000000",
      marginRight: "2px",
    },
  
    haveContainer: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "14px",
      color: "#7d7d7d",
      textTransform: "none",
      // marginBottom: "20px",
      textAlign: "center",
      marginTop: "40px",
    },
    register: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#000000",
      textTransform: "none",
      marginLeft: "5px",
    },
  
    imgContainer: {
      display: { xs: "none", md: "flex" },
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // width: { xs: "100%", sm: "50%" },
      // border: "7px solid #000000",
    },
    img: {
      // width: { xs: "600px", sm: "627px", md: "827px", lg: "827px" },
      // height: '650px',
      width: "390px",
      height: "350px",
    },
    errorMsgText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "12px",
      color: "red",
    },
  };
  
  export default signInStyles;