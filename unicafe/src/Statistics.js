import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  let res
  if (good === 0 && neutral === 0 && bad === 0) {
    res = <div>No feedback given</div>
  } else {
    res = (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + bad + neutral} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + bad + neutral)}
          />
          <StatisticLine
            text="positive"
            value={(good / (good + bad + neutral)) * 100}
          />
        </tbody>
      </table>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      {res}
    </>
  )
}

export default Statistics
