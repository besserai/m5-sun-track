import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const defaultOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: "Sun's path in the sky during the year",
        },
    },
    scales: {
        y: {
            max: 90,
            min: 0,
            ticks: {
                stepSize: 45
            }
            ,
            title: {
                text: "Altitude",
                display: true,
            }
        },
        x: {
            type: 'linear',
            max: 180,
            min: -180,
            ticks: {
                stepSize: 90,

            },
            title: {
                text: "Azimuth",
                display: true,
            }

        }
    },

    parsing: {
        xAxisKey: 'azi',
        yAxisKey: 'alt'
    },
    elements: {
        point: { radius: 0 }
    }
};


const defaultData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [{ azi: -90, alt: 0 }, { azi: 0, alt: 60 }, { azi: 90, alt: 0 }],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};


export default function Graph({ data = defaultData, options = defaultOptions }) {
    return <Line options={options} data={data} />;
}
