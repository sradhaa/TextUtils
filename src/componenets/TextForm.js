import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const [speaking, setSpeaking] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to upper case", "success");
  };
  const handleLwClick = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lower case", "success");
  };
  const convertToTitleCase = () => {
    const titleCaseText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(titleCaseText);
    props.showAlert("converted to title case", "success");
  };

  const convertToSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(sentenceCaseText);
    props.showAlert("converted to sentense case", "success");
  };

  const handleSpeakClick = () => {
    if (!speaking) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      setSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  const handleSPerLineClick = () => {
    let newText = text.replaceAll(".", ".\n");
    setText(newText);
  };
  const [fword, findWord] = useState("");
  const handleFind = (event) => {
    console.log("change hua");
    findWord(event.target.value);
  };
  const handledelete = () => {
    let newText = text.replaceAll(fword, "");
    setText(newText);
  };
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));

    props.showAlert("text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove extra space", "success");
  };

  const btnColor = props.mode;
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <b> {props.heading}</b>
          </label>
          {/* onChange={(event) => {
            setText(event.target.value);
          }} */}
          <textarea
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className={`btn btn-${btnColor} me-2`} onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className={`btn btn-${btnColor} me-2`} onClick={handleLwClick}>
          Covert to Lowercase
        </button>
        <button
          className={`btn btn-${btnColor} me-2`}
          onClick={convertToTitleCase}
        >
          Covert to Title Case
        </button>
        <button
          className={`btn btn-${btnColor} me-2`}
          onClick={convertToSentenceCase}
        >
          Convert to Sentence Case
        </button>
        <button
          className={`btn btn-${btnColor} me-2`}
          onClick={handleSpeakClick}
        >
          {speaking ? "Stop" : "Speak"}
        </button>
        <button
          className={`btn btn-${btnColor} me-2`}
          onClick={handleSPerLineClick}
        >
          1 Sentense Per Line
        </button>
        <button
          className={`btn btn-${btnColor} me-2 mt-2`}
          onClick={handledelete}
        >
          delete specific word
        </button>
        <button
          className={`btn btn-${btnColor} mx-1`}
          onClick={handleCopyClick}
        >
          {copied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button
          className={`btn btn-${btnColor} me-2`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
        <div>
          <p>
            {" "}
            <b>Find word</b>
          </p>
          <textarea
            className="form-control"
            value={fword}
            id="myBox"
            onChange={handleFind}
            rows="1"
          ></textarea>
        </div>
      </div>

      <div>
        <p>
          {" "}
          <b>Your text summary</b>
        </p>
        <p>
          {text.length > 0
            ? text.split(" ").filter((word) => word.length > 0).length + " "
            : "0 "}
          words , {text.length} characters
        </p>
        <p>
          <b>Preview</b>
        </p>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
