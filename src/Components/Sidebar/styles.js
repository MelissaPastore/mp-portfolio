import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: "#282c34",
    color: "white",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));
