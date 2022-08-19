import { useState } from 'react';
import useFetch from '../../hook/useFetch';

const SearchBar = ({ setCities, isAvailableSearch, setIsAvailableSearch }) => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length > 3) {
      setInputValue(e.target.value);
    }
  };

  const { data } = useFetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${inputValue}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setCities(data.slice(0, 4));
      setIsAvailableSearch(!isAvailableSearch);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='input-group mt-3'>
      <input className='form-control ms-2' onChange={handleChange} />
      <button type='submit' className='btn btn-outline-primary me-2'>Search</button>
    </form>
  );
};

export default SearchBar;
