import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DonutChart() {

    const data = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets : [
            {
                label : 'Sales for 2020(M)',
                data : [3,2,5,4,8],
                backgroundColor: [
                    "red",
                    "blue",
                    "green",
                    "yellow",
                    "orange"
                  ]
            }
        ]
    }
    const option = {
        title : {
            display : true,
            text : 'Doughnut Chart'
        }
    }
    return (
        <div className="chart">
            <Doughnut data={data} option={option}/>
        </div>
    )
}

export default DonutChart
