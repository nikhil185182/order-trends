import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { GREEN } from "../../shared/global_constants";

export const ContainedButton = styled(Button)({
  ":hover": {
    color: "white",
    background: GREEN,
  },
  color: "white",
  marginTop : '10px',
  background: GREEN,
  textTransform: "none",
  width : '100px',
  margin:'5px'
});
