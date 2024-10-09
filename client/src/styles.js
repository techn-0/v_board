import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  //   모바일 접근성
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse !important", // 우선순위 설정
    },
  },
}));
