import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Chinese',
    value: 'zh-CN',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];

const Translate = () => {
  // set default state
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown 
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Translation:</h3>
      <Convert text={text} language={language}/>
      <br />
      <div className="sub header">Powered by Google Translate API</div>
    </div>
  );
};

export default Translate;