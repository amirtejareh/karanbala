import {
    Color,
    ComponentsOverrides,
    ComponentsProps,
    ComponentsVariants,
    PaletteColor,
    Theme as MUITheme,
} from "@mui/material";
// @ts-ignore
import { DataGridProps, GridClassKey } from "@mui/x-data-grid/x-data-grid";

export enum TextFieldEnum {
    number = "number",
    phoneNumber = "phoneNumber",
    cartNumber = "cartNumber",
    currency = "currency",
    default = "default",
    justPersian = "justPersian",
    justEnglish = "justEnglish",
}

interface IOverrideTheme {}
interface IOverridePalette {
    primary: PaletteColor & Color;
}
// update variants
interface IOverrideTypographyVariants {
    xs?: React.CSSProperties;
    sm?: React.CSSProperties;
    base?: React.CSSProperties;
    lg?: React.CSSProperties;
    xl?: React.CSSProperties;
    "2xl"?: React.CSSProperties;
    "3xl"?: React.CSSProperties;
    "4xl"?: React.CSSProperties;
    "5xl"?: React.CSSProperties;
    "6xl"?: React.CSSProperties;
    "7xl"?: React.CSSProperties;
    "8xl"?: React.CSSProperties;
    "9xl"?: React.CSSProperties;
}

declare module "@mui/material/styles" {
    interface Theme extends IOverrideTheme {}
    interface ThemeOptions extends Partial<IOverrideTheme> {}
    interface Palette extends IOverridePalette {}
    interface PaletteOptions extends Partial<IOverridePalette> {}
    interface TypographyVariants extends IOverrideTypographyVariants {}
    interface TypographyVariantsOptions extends IOverrideTypographyVariants {}
}

// update variants
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        h5: true;
        h6: true;
        subtitle1: true;
        subtitle2: true;
        body1: true;
        body2: true;
        caption: true;
        button: true;
        overline: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        secondary: true;
    }
    interface ButtonPropsSizeOverrides {
        xs: true;
        sm: true;
        base: true;
        lg: true;
        xl: true;
    }
}

declare module "@mui/material/Fab/Fab" {
    export interface FabPropsSizeOverrides {
        xs: true;
        sm: true;
        base: true;
        lg: true;
        xl: true;
    }
}

declare module "@mui/material/SvgIcon/SvgIcon" {
    export interface SvgIconPropsSizeOverrides {
        xs: true;
        sm: true;
        base: true;
        lg: true;
        xl: true;
    }
}

declare module "@mui/material/Fab/fabClasses" {
    export interface FabClasses {
        /** Styles applied to the root element if `size="small"``. */
        sizeSmall: string;
        /** Styles applied to the root element if `size="medium"``. */
        sizeMedium: string;

        sizeXs: string;
        sizeSm: string;
        sizeBase: string;
        sizeLg: string;
        sizeXl: string;
    }
}

declare module "@mui/material/Button/buttonClasses" {
    interface ButtonClasses {
        /** Styles applied to the root element if `variant="outlined"`. */
        secondary: string;
        /** Styles applied to the root element if `variant="secondary"` and `color="inherit"`. */
        secondaryInherit: string;
        /** Styles applied to the root element if `variant="secondary"` and `color="primary"`. */
        secondaryPrimary: string;
        /** Styles applied to the root element if `variant="secondary"` and `color="secondary"`. */
        secondarySecondary: string;
        /** Styles applied to the root element if `size="small"` and `variant="secondary"`. */
        secondarySizeSmall: string;
        /** Styles applied to the root element if `size="medium"` and `variant="secondary"`. */
        secondarySizeMedium: string;
        /** Styles applied to the root element if `size="large"` and `variant="secondary"`. */
        secondarySizeLarge: string;

        /** Styles applied to the root element if `size="small"`. */
        sizeXs: string;
        sizeSm: string;
        sizeBase: string;
        sizeLg: string;
        sizeXl: string;
    }
}

declare module "@mui/material/SvgIcon/svgIconClasses" {
    export interface SvgIconClasses {
        fontSizeXs: string;
        fontSizeSm: string;
        fontSizeBase: string;
        fontSizeLg: string;
        fontSizeXl: string;
    }
}
declare module "@mui/system/createTheme/shape" {
    export interface Shape {
        borderRadius: number;
        rounded: string;
    }
}

declare module "@emotion/react/types/index" {
    export interface Theme extends MUITheme {}
}

declare module "@mui/material/TextField/TextField" {
    export interface OutlinedTextFieldProps {
        rounded?: boolean;
    }
}
declare module "@mui/material/InputBase/InputBase" {
    export interface InputBaseComponentProps {
        valueAs?: keyof typeof TextFieldEnum;
    }
}

declare module "@mui/material/styles/components" {
    export interface Components {
        MuiDataGrid?: {
            defaultProps?: ComponentsProps["MuiDataGrid"];
            styleOverrides?: ComponentsOverrides["MuiDataGrid"];
            variants?: ComponentsVariants["MuiDataGrid"];
        };
    }
}

declare module "@mui/material/styles/props" {
    export interface ComponentsPropsList {
        // @ts-ignore
        MuiDataGrid: DataGridProps;
    }
}
declare module "@mui/material/styles/overrides" {
    export interface ComponentNameToClassKey {
        // @ts-ignore
        MuiDataGrid: GridClassKey;
    }
}
