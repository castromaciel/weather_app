import { useState } from 'react';
import useFetch from '../../hook/useFetch';

const SearchBar = ({ setCities, handleClose }) => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const {
    hasError, errorCode, errorMessage, data,
  } = useFetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${inputValue}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setCities(data?.slice(0, 4));
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
        <button type='button' className='btn btn-outline-secondary me-2' onClick={handleClose}>Close</button>
      </form>
      { isError && <span className='text-white ms-2 text-danger'>You must write at least 3 letters !! </span> }
    {hasError
    && <section className='container-flud'>
      <section className='row'>
        <section className='col'>
          <i className="fa-regular fa-circle-xmark fa-9x text-danger mt-3 d-flex justify-content-center"></i>
          {errorCode !== 1003 ? <p className='text-danger text-center mt-2'>{errorMessage}</p> : <p className='text-danger text-center mt-2'>Sorry! Something went wrong</p> }
        </section>
      </section>
    </section> }
    </>
  );
};

export default SearchBar;
