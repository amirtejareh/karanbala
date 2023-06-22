import React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Create rtl cache
const cacheRtl: any = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
});

const RTL: any = (props: any) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

export default RTL;
