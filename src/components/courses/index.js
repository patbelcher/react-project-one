import React from 'react'
import CourseItem from './CourseItem'

class Courses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }

    }



   componentDidMount() {
       //go out to this url and grab the url
       fetch('https://bocanode.web.app/courses.json')
         .then(response => response.json())//parse the json from the response
         .then(data => {
             console.log(data)
             this.setState({courses: data})
         })
   }

//let name = this.props.name
//let phone = this.props.phone

//destructuring
//let { name, phone } = this.props



   render() {
       let { courses } = this.state
       if(courses.length === 0) {
           return <>Loading...</>
       }
       return (
           <>
             <h2>Short Courses</h2>
             <div className="course-section">
               {courses.map(course => {
                   return <CourseItem course={course} />
               })}
             </div>
            </>
       )
   }
}

export default Courses