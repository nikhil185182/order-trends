import { Snackbar } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/hooks";
import { setConsoleOpen } from "../../shared/utils/redux/appReducer";
import { getconsoleMessage, getconsoleOpen } from "./selector";

export default function GlobalSnackBar() {
  const dispatch = useAppDispatch();
  const consoleOpen = useAppSelector(getconsoleOpen);
  const consoleMessage = useAppSelector(getconsoleMessage);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={consoleOpen}
      onClose={() => dispatch(setConsoleOpen(false))}
      message={consoleMessage}
      autoHideDuration={2000}
    />
  );
}
