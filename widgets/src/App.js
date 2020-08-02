import React, { useState } from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

// static array to be passed into Accordion component
const items = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    id: 2,
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    id: 3,
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'Item #1',
    value: 'one',
  },
  {
    label: 'Item #2',
    value: 'two',
  },
  {
    label: 'Item #3',
    value: 'three',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div style={{padding: 20,}}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
