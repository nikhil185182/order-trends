import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { GREEN } from "../../shared/global_constants";
import { Margin } from "@mui/icons-material";

export const ContainedButton = styled(Button)({
  ":hover": {
    color: "white",
    background: GREEN,
  },
  color: "white",
  background: GREEN,
  textTransform: "none",
  width : '100px',
  margin:'5px'
});
