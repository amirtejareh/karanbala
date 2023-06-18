import React from "react";

const CHART_ID = "population_chart";

const PopulationChart = ({ chartId }: { chartId?: any }) => {
    return (
        <div
        // style={{
        //   alignItems: "center",
        // }}
        >
            <div
                id={chartId || CHART_ID}
                style={{
                    width: "100%",
                    height: "500px",
                    // margin: "50px 0",
                }}
            />
        </div>
    );
};

export default PopulationChart;
