import { Dialog, DialogTitle, DialogContent, TextField, DialogContentText, TableRow, TableCell, ListItemText, DialogActions, Button, DialogProps, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { toggleDrawer } from "../../shared/utils/redux/reducers/newUserReducer";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";

export default function Dialogbox() {
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const open = useAppSelector((state) => state.NewUser.isDrawerOpen);
    const dispatch: AppDispatch = useAppDispatch();
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) { descriptionElement.focus(); }
        }
    }, [open]);
    const listofcompanies = useAppSelector(
        (state) => state.NewUser.tempcompanieslist
      );
      const tempbarclickedDate=useAppSelector((state)=>state.NewUser.barclickedDate);
    return (
        <>
            <Dialog
                open={open}
                onClose={() => {
                    dispatch(toggleDrawer(false))

                }}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                
                <DialogContent dividers={scroll === "paper"}>
                    {/* <TextField
            label="Search Inactive Users"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        sx={{ width: 600 }}
                    >
                        {/* <div className="sidebar_heading"> */}
        <h2 > Enrolled Companies</h2>
        {/* </div> */}
      <div >
        <h3 >Date: {tempbarclickedDate}</h3>
      <Divider/>
        <h3 >Enrollments: {listofcompanies.length}</h3>
        </div>
        <List>
          
          {listofcompanies?.map((text, index) => (
            <ListItem style={{padding:"2%"}}>
           
              <AddBusinessOutlinedIcon style={{ fill: "#0072ea" }} />
              <ListItemText
                primaryTypographyProps={{
                  paddingLeft: 1,
                  fontSize: "16px",
                  fontFamily: "Segoe UI",
                  padding:'1'
                  // lineHeight:1
                  
                }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(toggleDrawer(false))}>close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
