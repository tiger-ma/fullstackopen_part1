const Total = (props) => {
  const parts = props.parts
  let total = 0
  parts.forEach((obj) => {
    console.log(obj.exercises)
    total += obj.exercises
  })
  

  return <p>Number of exercises {total}</p>
}

export default Total
