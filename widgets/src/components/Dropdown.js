import React, { useState, useEffect, useRef } from 'react';

// destructure {options} out of the properties object in App.js
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  // toggle dropdown open/close
  const [ open, setOpen ] = useState(false);
  const ref = useRef();

  // set up event listener
  useEffect(() => {
    const onBodyClick = (event) => {
      // if element clicked is inside component, not body
      if (ref.current.contains(event.target)){
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    // cleanup function
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  // add [] so only runs one time  
  }, []);

  const renderedOptions = options.map((option) => {
    // if item is selected don't show in list
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        // call onSelectedChange (setter) to call onSelectedChange in App.js = setSelected, 
        // to update selected piece of state and re-render app component and pass new selected to Dropdown component
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  }) 
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label" style={{marginTop: 10}}>{label}</label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
   </div>
  )
};

export default Dropdown;