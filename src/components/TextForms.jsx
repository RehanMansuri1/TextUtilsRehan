import React , {useState} from 'react'


export default function TextForms(props) {


    const ConvertUpcase=()=>{
        console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "success")
        

    }
    const ConertToLoCase=()=>{
        console.log('Clicked on lower case button');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "success")
        
    }
    const DeleteText=()=>{
        console.log('Clicked on Delete Text');
        setText(' ');
        props.showAlert("Text Deleted" , "success")
    }
    const onHandle=(event)=>{
        console.log('On change')
        setText(event.target.value)
    }
    const [text , setText] = useState('');
    return (
        <>

            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onHandle} ></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={ConvertUpcase}>{props.buttonName}</button>
            <button className="btn btn-secondary me-2" onClick={ConertToLoCase}>Convert To Lower Case</button>
            <button className="btn btn-secondary " onClick={DeleteText}>Delete text</button>

            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to Read</p>
                <h2 className='my-4'>Preview of Text</h2>
                <p className='my-2'>{text}</p>
            </div>

        </>
    )
}
