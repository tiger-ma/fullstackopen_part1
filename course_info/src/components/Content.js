import Part from './Part'

const Content = (props) => {
  const parts = props.parts
  console.log(parts)
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].excercises} />
      <Part part={parts[1].name} exercises={parts[1].excercises} />
      <Part part={parts[2].name} exercises={parts[2].excercises} />
    </>
  )
}

export default Content
