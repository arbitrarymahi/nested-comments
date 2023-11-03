import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    parent: {
      marginLeft: "10px",
    },
    commentTextContainer: {
      backgroundColor: "#EDF5F8",
      padding: "10px 12px",
      borderRadius: "0px 16px 16px 16px",
    },
    commentAvatar: {
      width: "29px",
      height: "29px",
    },
    container: {
      display: "flex",
    },
    replyButton: {
      fontFamily: "Inter,sans-serif",
      background: "none",
      border: "none",
      padding: "0",
      cursor: "pointer",
      color: "#3676D6",
      marginLeft: "10px",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "17px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    root: {
      marginLeft: "10px",
    },
    left: {
      marginLeft: "50px",
    },
    bodyText: {
      fontFamily: "Inter,sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "16.94px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    heading: {
      fontFamily: "Inter,sans-serif",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "17px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    blackButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontFamily: "Inter,sans-serif",
      background: "none",
      border: "none",
      padding: "0",
      cursor: "pointer",
      marginLeft: "10px",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "17px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    mainAvatar: {
      width: "40px",
      height: "40px",
    },
    upsideDown: {
      transform: "rotate(180deg)", // Rotate the icon 180 degrees
      padding: "5px",
      width:"15px",
      height: "17px",
      border: "1.5px",
    },
    card: {
      boxShadow: "0px 4px 34px 0px #00000026",
      width: "790px",
      margin: "auto",
      borderRadius: "0",
    },
  }));
  
  export default useStyles;