import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    // set timer to update debouncedText in 500ms
    const timerId = setTimeout(() => {
      // update text state if 500 ms lapses
      setDebouncedText(text);
    }, 500);

    return () => {
      // cancel timerId if user types before 500 ms lapses
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect( () => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
      {
        params: {
          q: debouncedText,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
        },
      });
      setTranslated(data.data.translations[0].translatedText)
    };
    doTranslation();
  }, [language, debouncedText]);

return (
  <div>
    <h1 className="ui header">
      {translated}
    </h1>
  </div>
  );
};

export default Convert;
