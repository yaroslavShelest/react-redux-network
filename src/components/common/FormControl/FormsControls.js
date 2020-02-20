import React from "react";

import './FormsControls.scss';



const FormControl = (props) => {
     const showError = props.meta.touched && props.meta.error
     return (
          <div className={ "formControl"  + " " + (showError ? "error" : " ")}>
                 {props.children}
             {showError && <span> {props.meta.error} </span> }  
          </div>
     )
}



export const Textarea = (props) => {
     return <FormControl {...props}><textarea {...props.input} {...props} {...props.meta} /></FormControl>
}

export const Input = (props) => {
     return <FormControl {...props}><input {...props.input} {...props} {...props.meta} /></FormControl>
     }