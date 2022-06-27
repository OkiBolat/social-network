/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";


const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    props.updateStatus(status)
    setEditMode(false)
    setStatus(props.status)
  }
  const onChangeStatusValue = (e) => {
    setStatus(e.currentTarget.value)
  }



  return (
    <div>
      {!editMode && <div>
        <span onDoubleClick={activateEditMode}>Status: {!props.status ? '------' : props.status}</span>
      </div>}
      {editMode && <div>
        <input onChange={onChangeStatusValue} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status} />

      </div>}
    </div>
  )
}


// class ProfileStatus extends React.Component{
//   state = {
//     editMode: false,
//     status: this.props.status
//   }
// activateEditMode = () => {
//   this.setState({
//     editMode: true
//   })
// }
// deactivateEditMode = () => {
//   this.props.updateStatus(this.state.status)
//   this.setState({
//     editMode: false
//   })
// }
// onChangeStatusValue = (e) => {
//   this.setState({
//     status: e.currentTarget.value
//   })
// }
// componentDidUpdate(prevProps, prevState){
//   if(prevProps.status !== this.props.status) {
//     this.setState({
//       status:this.props.status
//     })
//   }

// }


//   render(){
//     return <div>
//       {!this.state.editMode && <div>
//         <span onDoubleClick={this.activateEditMode}>Status: {!this.props.status? '------': this.props.status}</span>
//       </div>}
//       {this.state.editMode &&  <div>
//         <input  onChange={this.onChangeStatusValue} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />

//       </div>} 
//     </div>
//   }

// }

export default ProfileStatus;

