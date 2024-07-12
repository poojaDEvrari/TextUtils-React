import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase!","success");
      }
      const handleclClick = () => {
        let newText=('');
        setText(newText);
        props.showalert("Text is cleared!","success");
      }
      
      const handlelClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces removed!","success");
      }
      
      const handleloClick = () => {
        let newText= text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase!","success");
      }
      const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard!","success");
      }
      
      const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showalert("Text is Reversed!","success");
      }
      const handleCapitalizeClick = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showalert("Each word is capatalized!","success");
      }
      

      const handleOnChange = (event) => {
        setText(event.target.value);
      }
   
      
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
 
   <h1>{props.heading}</h1>
    <div  >
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleloClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleclClick}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handlelClick}>Remove Extra Spaces</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleReverseClick}>Reverse Text</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleCapitalizeClick}>Capitalize Each Word</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleCopyClick}>Copy Text</button>
</div>
<div style={{color: props.mode==='dark'?'white':'black'}}>
  <h3>Your text Summary</h3>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"enter something in the textbox to preview it:)"}</p>
</div>

</>
  )
  }
