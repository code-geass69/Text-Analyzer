import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Clear Text!", "success");

    }
    const handleCapClick = () => {
        let newText = text.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText)
        props.showAlert("Capitalized!", "success");

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }


    const [text, setText] = useState('');
    const textColor = props.mode === 'dark' ? 'white' :
        props.mode === 'pookie' ? 'white' : '#042743';



    const textAreaBgColor = props.mode === 'dark' ? '#0b052e' :
        props.mode === 'pookie' ? '#ff3688' : 'white';

    return (
        <>
            <div className="container" style={{ color: textColor, }}>
                <h2 className='mb-4'>{props.heading}: </h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder='Enter Text'
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: textAreaBgColor, color: textColor }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{ color: textColor }}>
                <h3 className='text-decoration-underline'>Your text summary:</h3>
                <p >Content - <strong>{text.split(/\s+/).filter((element) => element.length !== 0).length}</strong> words and <strong>{text.length}</strong> characters</p>
                <p>Time - <strong>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length}</strong> Minutes read</p>
                <h3 className='text-decoration-underline'>Preview: </h3>
                <p className='border'><span className='px-3'>{text.length > 0 ? text : "Nothing to preview! Type something"}</span> </p>
            </div>
        </>
    );
}
