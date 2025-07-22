import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: "#282c34",
    color: "white",
    width: drawerWidth,
  },
}));
