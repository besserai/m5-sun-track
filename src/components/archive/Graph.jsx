import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'recharts';

const defaultData = [{ "data1": [{ "x": 1, "y": 400 }, { "x": 2, "y": 200 }] }];

export default function Graph({ data = defaultData }) {

    for (let dataSeries of data) {
        for (let [dataSeriesName, dataSeriesData] of Object.entries(dataSeries)) {
            console.log(`${dataSeriesName}:`);
            for (let dataPoint of dataSeriesData) {
                console.log(`${dataPoint.x}, ${dataPoint.y}`);
            }
        }
    }

    return (<LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x">
            <Label value="Azimuth" offset={-2} position="insideBottom" />
        </XAxis>
        <YAxis>
            <Label value="Altitude" offset={0} angle="-90" position="insideLeft" />
        </YAxis>
    </LineChart>)
}

