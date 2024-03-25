import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {

    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }


    const [series, setSeries] = useState([
        {
            name: 'Metric1',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric2',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric3',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric4',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric5',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric6',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric7',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric8',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: 'Metric9',
            data: generateData(18, { min: 0, max: 90 })
        }
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        title: {
            text: 'HeatMap Chart (Single color)'
        },
    });

    // Assuming generateData is a function that generates data for the chart
    // If it's not defined in this scope, you need to import or define it

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="heatmap" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
