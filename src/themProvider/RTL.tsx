import React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Create rtl cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
});

const RTL: React.FC = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

export default RTL;
