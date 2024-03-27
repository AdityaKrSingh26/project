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
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
            data: generateData(18, { min: 0, max: 90 })
        },
        {
            name: '',
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
        colors: ["#39d252"],
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
