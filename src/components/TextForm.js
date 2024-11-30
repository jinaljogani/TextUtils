import React,{useState} from 'react'
//rfc shortcut


export default function TextForm(props) {
    const handleUpClick = () => {
        // code for upper case
       let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");

    }
    const handleLoClick = () => {
        // code for lower case
       let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }
    const handleCopy = () => {
        // code for clear
       var text = document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard!", "success");

    }
    const handleClear = () => {
        // code for copy
       let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");

    }

    const speak=()=> {
        let msg = new SpeechSynthesisUtterance(text);
        //msg.text=text;
        window.speechSynthesis.speak(msg);

    }


    const handleOnChange = (event) => {
        // code for upper case
        setText(event.target.value);
    }
    const [text,setText]=useState('');

  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label forHtml="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="14" style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'dark' ? 'white' : '#042743',}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove extra spaces</button>
        <button type="submit" className="btn btn-primary my-1 mx-1" onClick={speak} >Speak</button>

    </div>
    <div className='container my-3'  style={{color:props.mode=== 'dark' ? 'white':'#042743',}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length?text:"enter something to preview"}</p>
    </div>
    </>
  )
}
