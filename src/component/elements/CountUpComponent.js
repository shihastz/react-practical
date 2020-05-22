import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

export default function CountUpComponent() {

    const { countUp, start, pauseResume, reset, update} = useCountUp({
        duration : 5,
        end : 1000,
        startOnMount : false
    })

    return (
        <div>
            <div>
    <h1>{countUp}</h1>
    <button onClick={start}>Start</button>
    <button onClick={reset}>reset</button>
    <button onClick={pauseResume}>pause & resume</button>
    <button onClick={()=> update(2000)}>Update to 2000</button>
            </div>
            <CountUp end={500}/>
            <br/>
            <CountUp end={500} duration={10}/>
            <br/>
            <h1><CountUp start={500} end={1000} duration={10}/></h1>
            <h1><CountUp end={1000} duration={10} prefix="$" decimals={2} /></h1>
            <h1><CountUp end={1000} duration={10} suffix="USD" decimals={2} /></h1>
        </div>
    )
}
