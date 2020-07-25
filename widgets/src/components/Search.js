import React, { useState, useEffect }from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  // called when user types (term changes)
  useEffect(() => {
    // update debounced term piece of state only run after typing completed
    // then fetch data from API
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // update term piece of state
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }  
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go to Wikipedia
          </a> 
        </div> 
        <div className="content">
          <div className="header">{result.title}</div>
          {/* take 3rd party string and turns into html element, opens up to XSS attack */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
       {renderedResults}
      </div>
    </div>
  );
};

export default Search;
