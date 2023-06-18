import { Switch, SwitchProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

interface ISwitchProps extends SwitchProps {}
const useStyles = makeStyles((theme: Theme) => ({}));

const SwitchKit: React.FC<ISwitchProps> = (props) => {
    const classes = useStyles();
    return <Switch defaultChecked color="primary" />;
};

export default SwitchKit;
