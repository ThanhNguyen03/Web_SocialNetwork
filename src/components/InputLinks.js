import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLink, validateLink, embedLink } from '../redux/actions';

import '../style/style.css';

const InputLinks  = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddLink = () => {
    const isValid = validateLink(inputValue);
    if (isValid) {
      let embedUrl = embedLink(inputValue);
      dispatch(addLink(embedUrl, Date.now()));
      setInputValue('');
    } else {
      alert('Invalid link!');
    }
  };

  return (
    <div className="container A">
      <input type="text" value={inputValue} className="form-control" placeholder="Nhập link..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn-primary" onClick={handleAddLink}>
        Add Link
      </button>
    </div>
  );
  
};

export default InputLinks;