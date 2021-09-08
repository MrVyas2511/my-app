import React from 'react'

export default function Preview(props) {
    return (
        <div>
            <div className="container my-3 p-5 bg-light" >
                <h5 className="mb-3">Your Text summary</h5>

                <ul>

                    <li>
                <p> <strong>word</strong> : {props.text.split(' ').filter(function (n) { return n !== '' }).length}</p>
                </li>
                <li>
                <p> <strong>Charcter</strong> : {props.text.length}</p>
                </li>

                <li>
                <p> <strong>Reading Time </strong> : {props.text.split(' ').filter(function (n) { return n !== '' }).length*0.02} Minutes</p>
                </li>
                </ul>
            </div>
        </div>
    )
}
