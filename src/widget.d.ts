/// <reference types="react" />

declare module "widget/Provider" {
    export interface IMuiProviderProps {
        mode?: import("@mui/material").PaletteMode;
        theme?: import("@mui/system").ThemeOptions;
        lowDensity?: boolean;
        localization?: import("@mui/material/locale").Localization;
        direction?: import("@mui/system").Direction;
    }

    const MuiProvider: React.ComponentType<IMuiProviderProps>;

    export default MuiProvider;
}
