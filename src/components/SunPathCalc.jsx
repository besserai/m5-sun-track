import Graph from "./Graph";
const SunCalc = require('suncalc');

export default function SunPathCalc({ loc = { "lat": 52.5170365, "lon": 13.3888599 } }) {

    const getSunPos = (time = Date.now(), location = loc) => {
        let calc = SunCalc.getPosition(time, location.lat, location.lon)
        let altitude = calc.altitude * 180 / Math.PI;
        let azimuth = calc.azimuth * 180 / Math.PI;
        return { "alt": altitude, "azi": azimuth }
    }

    const calcSunPathForDate = (location = loc, date = Date.UTC(1970, 1, 1), timeStepsInHrs = 1) => {
        let timeSteps = Array.from({ length: 24 / timeStepsInHrs }, (value, index) => index * timeStepsInHrs);
        const sunPathForDate = [];
        for (let timeStep of timeSteps) {
            sunPathForDate.push(getSunPos(date + (timeStep * 3600000), location));
        }
        return sunPathForDate;
    }

    const calcAllSunPathsForLoc = (location = loc, dateStepsInMonts = 3) => {
        let monthSteps = Array.from({ length: 12 / dateStepsInMonts }, (value, index) => 3 + index * dateStepsInMonts);
        const allSunPathsForLoc = [];
        for (let month of monthSteps) {
            allSunPathsForLoc.push({
                label: `Month: ${month}`,
                data: calcSunPathForDate(location, Date.UTC(1970, month - 1, 21)),
                borderColor: `rgb(${250 - 20 * Math.abs(month - 6)}, ${200}, ${0 + 50 * Math.abs(month - 6)})`,
            })
        }
        return allSunPathsForLoc;
    }

    let data = { datasets: calcAllSunPathsForLoc() }

    return (
        <Graph data={data} />
    )
}