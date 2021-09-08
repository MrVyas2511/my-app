import React from 'react'

export default function Alert(props) {
    return (

        <div style={{height: "80px"}} >       
            { props.Alerts &&<div >
            <div className={`alert alert-${props.Alerts.type} alert-dismissible fade show`} role="alert">
            <strong>{props.Alerts.type}</strong> : {props.Alerts.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>}
        </div>

    )
}
