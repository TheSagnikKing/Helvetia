import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageWrapper: {
    width: "85%",
    margin: "auto",
    height: "100vh",
    // backgroundColor: ({ theme }) => theme.palette.bgColor,
    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    paddingInline: "20px",
    fontFamily: "Rubik",
    display: "grid",
    gridTemplateRows: "25vh 65vh 10vh",

    "@media (max-width:768px)": {
      height: "auto",
      gridTemplateRows: "45vh 65vh 10vh",
    },
  },

  detailbtn: {
    background: "#F4F4F8",
    width: "87px",
    height: "34px",
    color: "black",
    border: "2px solid #A8ABC2",
    padding: "0px 10px 0px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  theader: {
    // width: "100%",
    width: "85%",
    margin: " auto",
    marginTop: "20px",
    height: "40px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "@media (max-width: 768px)": {
      flexDirection: "column",
      marginBottom: "90px",
      alignItems: "flex-start",
    },

    "& > p:nth-child(1)": {
      fontSize: "20px",
      //   color: ({ theme }) => theme.palette.text.primary,
      fontWeight: "bold",
    },
  },

  theaderbtngroup: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",

    "& > button:nth-child(1)": {
      width: "120px",
      height: "100%",
      background: "#9A0143",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      color: "#fff",
      "& p": {
        color: "#fff",
        textDecoration: "none",
      },
    },
    "& > button:nth-child(2)": {
      width: "100px",
      height: "100%",
      background: "#5B5D6E",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      color: "#fff",
    },
  },

  super_app_theme_header: {
    // color: ({ theme }) => theme.palette.text.primary,
  },

  pagination_container: {
    width: "85%",
    // height: "10%",
    paddingInline: "20px",
    // background: "blue",
    fontFamily: "Rubik",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > div:nth-child(1)": {
      marginInline: "auto",
    },

    "& > div:nth-child(2)": {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      fontFamily: "Rubik",

      "@media (max-width: 768px)": {
        display: "none"
      }
    },

    "& > div:nth-child(2) > div:nth-child(1) > label": {
      //   color: ({ theme }) => theme.palette.text.primary,
    },

    "& > div:nth-child(2) > div:nth-child(2)": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)": {
      //   color: ({ theme }) => theme.palette.text.primary,
    },

    "& > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)": {
      //   color: ({ theme }) => theme.palette.text.primary,
    },
  },

  detailsHeader: {
    paddingBlock: "18px",
    // height: "500px",

    "@media (max-width: 768px)": {
      // background: "red",
      // marginBottom: "300px"
    },

    "& > p:nth-child(1)": {
      fontSize: "20px",
      fontWeight: "bold",
      //   color: ({ theme }) => theme.palette.text.primary,
      textAlign: "start",
    },
    "& > div:nth-child(2)": {
      marginTop: "10px",
      textAlign: "start",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      //   color: ({ theme }) => theme.palette.text.primary,

      "& > div": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        // color: ({ theme }) => theme.palette.text.primary,

        "& > div": {
          width: "12px",
          height: "12px",
          background: "#B80351",
          borderRadius: "3px",
        },
      },
    },

    "& > div:nth-child(3)": {
      marginTop: "30px",
      fontSize: "12px",

      "& > p": {
        textAlign: "start",
        // color: ({ theme }) => theme.palette.text.primary,
      },
    },
  },

  cell_class: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // color: ({ theme }) => theme.palette.text.primary,
  },

  compliancy_check: {
    width: "15px",
    height: "15px",
    borderRadius: "3px",
    marginRight: "10px",
  },
});