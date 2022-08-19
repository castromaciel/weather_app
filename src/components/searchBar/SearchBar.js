import { useState } from 'react';
import useFetch from '../../hook/useFetch';

const SearchBar = ({ setCities }) => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const { data } = useFetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${inputValue}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setCities(data.slice(0, 4));
      setIsError(false);
      return;
    }
    setIsError(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='input-group mt-3'>
        <input className='form-control ms-2' onChange={handleChange} placeholder='Search place'/>
        <button type='submit' className='btn btn-outline-primary me-2' onClick={handleSubmit}>Search</button>
      </form>
      { isError && <span className='text-white ms-2 text-danger'>You must write at least 3 letters !! </span> }
    </>
  );
};

export default SearchBar;
