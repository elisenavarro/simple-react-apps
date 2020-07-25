// useState is a hook that gives access to 'setState' inside a functional component
import React, { useState } from 'react';

const Accordion = ({items}) => {
  // initialize new state and set default value useState
  // array destructring to get reference to elements inside array
  const [activeIndex, setActiveIndex] = useState(null);

  // helper method
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  // receive items prop and render list with map
  const renderedItems = items.map((item, index) => {
    // decide when to add 'active' to className
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.id}>
        <div 
          className={`title ${active}`}
          // detect user click, passing onTitleClick helper method
          // need to use arrow funct to call only when executed, not everytime app is refreshed
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>   
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      {activeIndex}
    </div>
  )
}

export default Accordion