import QRCode from "qrcode";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [src, setSrc] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    QRCode.toDataURL("I like putting stuff as qr codes.").then(setSrc);
  }, []);

  const onBtnClick = () => {
    QRCode.toDataURL(content).then(setSrc);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  /*
   Add download image button
   Add Scanner page 
  */

  return (
    <div className="app">
      <h1 className="heading">QRCode Generator</h1>
      <label for="content" className="label">
        Enter content for qr code:
      </label>
      <textarea
        id="content"
        name="content"
        className="textarea"
        rows="7"
        cols="55"
        onChange={handleChange}
      >
        {content}
      </textarea>
      <button className="button" type="submit" onClick={onBtnClick}>
        Generate
      </button>
      <figure className="image-container">
        <img src={src} alt="a Qr code" />
        <figcaption>Right Click and Save ✌</figcaption>
      </figure>
    </div>
  );
};

export default App;
