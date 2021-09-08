import React,{useState}from 'react'
import { useSpeechSynthesis } from "react-speech-kit"
export default function TextBox(props) {

    
    const [tempText,setTemp] = useState(" ");
    const { speak } = useSpeechSynthesis();
    const handleUpClick=()=>{
        console.log("button clicked");

        const newtext = props.text.toUpperCase();
        props.setText(newtext);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setTemp(event.target.value);
        props.setText(event.target.value);
    }
    const handlelowerClick = ()=>{
        const newtext = props.text.toLowerCase();
        props.setText(newtext);
    }
    
    const handleDefaultClick=()=>{
        const s = tempText;
        props.setText(s);

    }

    const handlespaces=()=>{
        let newtext = props.text.split(/[ ]+/);
        props.setText(newtext.join(" "));
        };
    const copyText=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    };


    
    return (
        <div style={{color:"black"}}>
        <div className="container" >
            <div className="form-group mb-3">
                <label htmlFor="myBox"> <h5>Enter the Text Here :</h5></label>
                <textarea className="form-control" value={props.text} onChange={handleOnChange} id="myBox" placeholder="Start Typing..." rows="8" ></textarea>
                <button className="btn  btn-sm bg-primary my-2" onClick={handleUpClick}>Upper Case</button>
                <button className="btn  btn-sm bg-primary m-2" onClick={handlelowerClick}>Lower Case</button>
                <button className="btn  btn-sm bg-primary m-2" onClick={handleDefaultClick}>Default</button>
                <button className="btn  btn-sm bg-primary m-2" onClick={handlespaces}>Remove white space</button>
                <button className="btn  btn-sm bg-primary m-2" onClick={copyText}>Copy</button>
                <button className="btn  btn-sm bg-primary m-2" onClick={()=>speak({text: props.text})}>Speak</button>
            </div>
        <div className="bg-light p-3">
        <h5 className="">Preview</h5>
        <p className="previewPara">{props.text.length > 0 ? props.text : "Enter the Text in TextBox"}</p>
        </div>
        </div>
        </div>
      
    )
}
