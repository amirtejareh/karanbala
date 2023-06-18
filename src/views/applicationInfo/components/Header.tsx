import {
    Box,
    Grid, Theme, Typography,
   
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    typography: {   
        color: theme.palette.primary['main']
    },
 
    
}));


const Header = () => {

    const classes = useStyles();

    return (
        <Grid container>
        <Grid item xs={12}>
            <Box justifyContent={"center"} display={"flex"}>
     
     <Typography variant="caption"  className={classes.typography}>
     امام جعفر صادق (ع) : دوست ندارم جوانی از شما را جز بر دو گونه ببینم،دانشمند یا دانشجو
     </Typography>
            </Box>
        </Grid>

   
    </Grid>
    );
};

export { Header };
