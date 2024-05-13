import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageWrapper: {
    width: "100%",
    height: "90vh",
    // backgroundColor: ({ theme }) => theme.palette.bgColor,
    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    paddingInline: "20px",
    fontFamily: "Rubik",
    // overflow: "auto"
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
  compliancystatus: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "40px",
    gap: "10px",

    "& > div:nth-child(1)": {
      width: "15px",
      height: "15px",
      borderRadius: "3px",
    },
    "& > p:nth-child(2)": {
      width: "40px",
      height: "15px",
      // color: ({ theme }) => theme.palette.text.primary,
    },
  },

  rulesrevpara: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "60px",
    // color: ({ theme }) => theme.palette.text.primary,
  },

  theader: {
    width: "100%",
    height: "40px",
    marginBottom: "20px",
    justifyContent: "space-between",
    alignItems: "center",

    "& > p:nth-child(1)": {
      fontSize: "20px",
      // color: ({ theme }) => theme.palette.text.primary,
      fontWeight: "500",
    },
  },

  theaderbtngroup: {
    width: "402px",
    height: "100%",
    border: "2px solid #A8ABC2",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",

    // "& > p:nth-child(1)": {

    // },

    "& > button:nth-child(2)": {
      width: "240px",
      height: "100%",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "13px",
      // color: ({ theme }) => theme.palette.text.primary,
    },

    "& > button:nth-child(3)": {
      background: "#9A0143",
      height: "100%",
      width: "160px",
      borderRadius: "5px",
      fontWeight: "700",
      color: "#fff",
      fontSize: "12px",
      cursor: "pointer",
      border: "none",
    },
  },

  filenameclass: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    // color: ({ theme }) => theme.palette.text.primary,
  },

  computationdate: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    // color: ({ theme }) => theme.palette.text.primary,
  },

  super_app_theme_header: {
    // color: ({ theme }) => theme.palette.text.primary,
  },

  pagination_container: {
    width: "100%",
    height: "10vh",
    // backgroundColor: ({ theme }) => theme.palette.bgColor,
    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    paddingInline: "20px",
    fontFamily: "Rubik",
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

      "@media (max-width: 430px)": {
        display: "none"
      }
    },

    "& > div:nth-child(2) > div:nth-child(1) > label": {
      // color: ({ theme }) => theme.palette.text.primary,
    },

    "& > div:nth-child(2) > div:nth-child(2)": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)": {
      // color: ({ theme }) => theme.palette.text.primary,
    },

    "& > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)": {
      // color: ({ theme }) => theme.palette.text.primary,
    },
  },
});