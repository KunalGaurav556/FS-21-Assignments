import "./translater.modular.css";
import Languages from "../languages";
import {useState} from "react";

const Translate = () => {

  const [fromTxt, setFromTxt] = useState ('');
  const [toTxt, setToTxt] = useState ('');
  const [fromLanguage, setFromLanguage] = useState ('en-GB');
  const [toLanguage, setToLanguage] = useState ('hi-IN');
  

  const handelExchange = () => {
     let tempValue =fromTxt;
     setFromTxt(toTxt);
      setToTxt(tempValue);

     let tempLang =fromLanguage;
     setFromLanguage(toLanguage);
     setToLanguage(tempLang);
  };

  const copyContent = (text) =>{
     navigator.clipboard.writeText(text);
  }
  
  const utterText = (text ,language) =>{
     const synth =window.speechSynthesis;
     const utterance = new SpeechSynthesisUtterance(text);
     utterText.lang =language;
     synth.speak(utterance);
  }
 

   const handelIconclick = (target ,id) =>{
       if(target.classList.contains('fa-copy')) {
        if(id == 'from'){
            copyContent(fromTxt);
        } else{
            copyContent(toTxt)
        }
       } else{
        if(id == 'from'){
            utterText(fromTxt,fromLanguage)
        } else{
            utterText(toTxt,toLanguage)
        }
       }
   }

   const handleTranslate = () => {
    let url = `https://api.mymemory.translated.net/get?q=${fromTxt}&langpair=${fromLanguage}|${toLanguage}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToTxt(data.responseData.translatedText);
      })
      .catch((error) => console.error('Error:', error));
  };
  
  return (
    <>
      <div className="wrapper">
        <div className="text-input">
          <textarea
            className="from-txt"
            name="from"
            id="from"
            placeholder="Enter Text"
            value={fromTxt} onChange={(event) => setFromTxt(event.target.value)}
          ></textarea>
          <textarea className="to-txt" name="to" id="to" readOnly value={toTxt}></textarea>
        </div>

        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i id="from" class="fa-solid fa-volume-high" onClick={(event) => handelIconclick(event.target,'from')}></i>
              <i id="from" class="fa-solid fa-copy" onClick={(event) => handelIconclick(event.target,'from')}></i>
            </div>
            <select value={fromLanguage} onChange={(event) => setFromLanguage(event.target.value)}>
              {Object.entries(Languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </li>
          <li className="exchange" onClick={handelExchange}>
            <i class="fa-solid fa-right-left"></i>
          </li>
          <li className="row to">
            <select value={toLanguage} onChange={(event) => setToLanguage(event.target.value)}>
            {Object.entries(Languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
            <div className="icons">
              <i id="to" class="fa-solid fa-copy" onClick={(event) => handelIconclick(event.target,'to')}></i>
              <i id="to" class="fa-solid fa-volume-high" onClick={(event) => handelIconclick(event.target,'to')}></i>
            </div>
          </li>
        </ul>
      </div>
      <button onClick={handleTranslate}>Translate</button>
    </>
  );
};

export default Translate;
