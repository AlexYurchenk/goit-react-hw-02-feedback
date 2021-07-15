import React from 'react'

const FeedbackOptions = ({goodIncrement,neutralIncrement,badIncrement}) => (
    <ul>
          <li><button onClick={goodIncrement}>good</button></li>
          <li><button onClick={neutralIncrement}>neutral</button></li>
          <li><button onClick={badIncrement}>bad</button></li>
    </ul>)
export default FeedbackOptions;