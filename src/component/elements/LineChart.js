import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {

    const data = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets : [
            {
                label : 'Sales for 2020(M)',
                data : [3,2,5,4,8],
                borderColor : ['rgba(255, 206, 86, 0.2)'],
                backgroundColor : ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor : 'rgba(255, 206, 86, 0.2)',
                pointBorderColor : 'rgba(255, 206, 86, 0.2)'
            },
            {
                label : 'Sales for 2019(M)',
                data : [1,3,4,7,3],
                borderColor : ['rgba(54, 162, 235, 0.2)'],
                backgroundColor : ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor : 'rgba(54, 162, 235, 0.2)',
                pointBorderColor : 'rgba(54, 162, 235, 0.2)'
            }
        ]
    }
    const option = {
        title : {
            display : true,
            text : 'Line Chart'
        },
        scales: {
            yAxes : [
                {
                    ticks: {
                        min:0,
                        max: 8,
                        stepsize : 1
                    }
                }
            ]
        }
    }
    return (
        <div className="chart">
            <Line data={data} option={option}/>
        </div>
    )
}

export default LineChart
