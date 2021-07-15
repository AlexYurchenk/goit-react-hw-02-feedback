import React from 'react'
import style from './Statistics.module.css'
const Statistics = ({good,neutral,bad,total,positiveFeedbackPercentage}) => (
        <ul>
            <li><p>Good : {good }</p></li>
            <li><p>Neutral : {neutral}</p></li>
            <li><p>Bad : {bad}</p></li>
            <li><p>Total :{total}</p></li>
            <li><p>Positive feedback : {typeof positiveFeedbackPercentage ==='number'&&!positiveFeedbackPercentage?' No reviews':positiveFeedbackPercentage+'%'}</p></li>
        </ul>
)

export default Statistics