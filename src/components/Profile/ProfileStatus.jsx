import React, {useState, useEffect} from 'react';



const ProfileStatus = (props) => {
     let [editMode, setEditMode] = useState(false);// destrycture array 
     let [status, setStatus] = useState(props.status);// destrycture array 
     const activateEditMode = () => {
          setEditMode(true);
      }

      useEffect( () => {
          setStatus(props.status);
      }, [props.status] );
      
      const deactivateEditMode = () => {
          setEditMode(false);
          props.updateStatus(status);
      }
      const onStatusChange = (e) => {
          setStatus(e.currentTarget.value);
      }
     return (
          <div >
          {!editMode && 
          <div>
           {props.isOwner && <p onClick ={activateEditMode} className="button-2">
          <p>Редактировать cтатус <i className="fas fa-edit"></i></p>
          </p> }
          <div className="profile_status  ">
          {props.status || ""}
          </div> 
          </div>
         }
          {editMode && 
         
         <div>
         <p onClick ={activateEditMode} className="button-2">
         <p>Редактировать cтатус <i className="fas fa-edit"></i></p>
         </p>
         <div className="profile_status  ">
         <input  value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}    />
         </div> 
         </div>
           }
          </div>
     )
}


{/* <div  >

</div> */}


export default ProfileStatus

{/* <div>
<span onDoubleClick ={activateEditMode} >{props.status || "- - - -"}</span> 
<button onClick ={activateEditMode} ></i></button>
</div> */}