import QRCode from "qrcode";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [src, setSrc] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    QRCode.toDataURL("I like putting stuff as qr codes.").then(setSrc);
  }, [src]);

  const onBtnClick = () => {
    QRCode.toDataURL(content).then(setSrc);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const setDataUrl = (event) => {
    event.target.href = src;
  };

  /*
   Add Scanner page 
  */

  return (
    <div className="app">
      <h1 className="heading">QRCode Generator</h1>
      <label htmlFor="content" className="label">
        Enter content for qr code:
      </label>
      <textarea
        id="content"
        name="content"
        className="textarea"
        rows="7"
        cols="55"
        onChange={handleChange}
        value={content}
      ></textarea>
      <button className="button" type="submit" onClick={onBtnClick}>
        Generate
      </button>
      <figure className="image-container">
        <img src={src} alt="a Qr code" />
        <figcaption>Right Click and Save ✌</figcaption>
      </figure>
      <a
        href=" "
        className="button download"
        download="qr_code_image.png"
        role="button"
        onClick={setDataUrl}
      >
        Download
      </a>
    </div>
  );
};

export default App;
