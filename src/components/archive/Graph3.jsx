import { Chart } from "chart.js";

export default function Graph3() {

    const onLoad = () => {

        const ctx = document.getElementById('myChart');

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    return (<div>
        hello
        <canvas onLoad={onLoad} id="myChart"></canvas>
    </div>)
}