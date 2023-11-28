const Course = ({ courses }) => {

    const openCourses = () => {
      courses.forEach(course => {
        console.log(course.name)
        course.parts.map((part, i) => {
          console.log(part.name, part.exercises)
        })
        const sum = course.parts.reduce((acc, curValue) => curValue.exercises + acc, 0)
        console.log(sum)
      });
    }
  
    return (
      <>
        {openCourses()}
      </>
    )
  }

  export default Course