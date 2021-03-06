import React from 'react';

export const VisibilityControl = (props) => {
    return (
        <div className="form-check">
            <input
             type="checkbox"
              name=""
               id=""
               className="form-check-input"
               checked={props.isChecked}
               onChange={e => props.callback(e.target.checked)}
               />
               <label
                htmlFor="\" 
                className="form-check-label"
               >
                   Show {props.description}
               </label>
        </div>
    )
}