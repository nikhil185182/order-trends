import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { GREEN } from "../../shared/global_constants";

export const ContainedButton = styled(Button)({
  ":hover": {
    color: "white",
    background: GREEN,
  },
  color: "white",
  background: GREEN,
  textTransform: "none",
});
