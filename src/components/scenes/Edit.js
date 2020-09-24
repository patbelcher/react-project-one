import React from 'react'

class Edit extends React.Component {
     constructor(props) {
         super(props)
         this.state= {
             name: ''
         }
     }
     
     render() {
         let { name } = this.state
         document.title = name
         return (
           <form>
               <h1>My name is{name}</h1>
               <label>
                   Name:
                   <input type="text" 
                   onChange={(e) => {
                       let newValue = e.target.value
                       this.setState({ name: e.target.value })
                       document.title = name
                   }}
                   value={name}
                   name="name"></input>
               </label>
               <button type="submit" onClick={() => {
                    alert('Your name is: ' + name)

               }}>Submit</button>
           </form>  
           )
     }
}


export default Edit
