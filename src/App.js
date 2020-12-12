import React, { useState } from "react";
import "./styles.css";

// var userName=prompt("give your Name");

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState(" ");
  var emoji = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "☺️": "Smiling Face",
    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤪": "Zany Face",
    "😝": "Squinting Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤗": "Hugging Face",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Dizzy Face",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face",
    "😎": "Smiling Face with Sunglasses",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "🙁": "Slightly Frowning Face",
    "☹️": "Frowning Face",
    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",
    "😦": "Frowning Face with Open Mouth",
    "😧": "Anguished Face",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad but Relieved Face",
    "😢": "Crying Face",
    "😭": "Loudly Crying Face",
    "😱": "Face Screaming in Fear",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face",
    "😓": "Downcast Face with Sweat",
    "😩": "Weary Face",
    "😫": "Tired Face",
    "🥱": "Yawning Face",
    "😤": "Face with Steam From Nose",
    "😡": "Pouting Face",
    "😠": "Angry Face",
    "🤬": "Face with Symbols on Mouth",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns"
  };

  var emojiOject = Object.keys(emoji);
  function changeUserInput(event) {
    var inputByUser = event.target.value;

    if (/^[a-zA-Z]+$/.test(inputByUser)) {
      alert("Text not allowed ,only emojis!");
    } else if (/^\d+$/.test(inputByUser)) {
      alert("Numbers not allowed,only emojis!");
    }

    var emojiMeaning = emoji[inputByUser];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Can't read the emoji";
    }
    console.log(emojiMeaning);
    setEmojiMeaning(emojiMeaning);
  }

  function emojiHandler(emojis) {
    var emojiMeaning = emoji[emojis];
    setEmojiMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <header>
        <nav className="navigation container">
          <div className="nav-brand">SiMiLeYs</div>
        </nav>
      </header>
      <div>
        <h3>Emoji Interpreter</h3>
        <input
          placeholder="Insert a Emoji/press on below Emoji"
          className="userInput"
          onChange={changeUserInput}
        ></input>
      </div>
      <div className="outputDiv">{emojiMeaning}</div>

      <div>
        {emojiOject.map(function (emoji) {
          return (
            <span
              className="emoji"
              onClick={() => emojiHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <span> Smiley - New way of communication ❤️</span>
        </div>
        <small> © | 2020 | pvr</small>
      </footer>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
