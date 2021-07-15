import './App.css';
import React, { Component } from 'react'
import Statistics from './components/Statistics/Statistics.js'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions '
import Section from './components/Section/Section'
class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  goodIncrement = (e) => {
    this.setState((prevState) => {
      return {
        good : prevState.good + 1
      }
    })
  }
  neutralIncrement = (e) => {
    this.setState((prevState) => {
      return {
        neutral : prevState.neutral + 1
      }
    })
  }
  badIncrement = (e) => {
    this.setState((prevState) => {
      return {
        bad : prevState.bad + 1
      }
    })
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }
  countPositiveFeedbackPercentage = () => {
   return   Math.round(this.state.good/(this.countTotalFeedback()/100))
  }
  render() {
    return (
      <div>
        <Section title = 'Please leave feedback'>
            <FeedbackOptions goodIncrement={this.goodIncrement} neutralIncrement={this.neutralIncrement} badIncrement={this.badIncrement} />
        </Section>
        <Section title='Statistic'  >
            {this.countTotalFeedback() == 0?<h3>no feedback given</h3>:<Statistics good={this.state.good} neutral={this.state.neutral} bad = {this.state.bad} total = {this.countTotalFeedback()} positiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()} />}
        </Section>
      </div>

    )
  }
}


export default App;
