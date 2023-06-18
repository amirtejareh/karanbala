import {
    Grid, Typography,
   
} from "@mui/material";

const Header = () => {
    return (
        <Grid
            pt={5}
            
            container
            alignItems={"center"}
            flexWrap="nowrap"
            justifyContent={"space-between"}
        >
            <Grid item  container alignItems={"center"} flexWrap="nowrap" >
                <Grid item>

                    <Typography>1</Typography>
                    <Typography>2</Typography>
                    <Typography>3</Typography>
                    <Typography>3</Typography>
      
                </Grid>
           
            </Grid>
      
        </Grid>
    );
};

export { Header };
