import React from 'react';
import { Content } from '../content';

const SideBar = () => {
  return (
    <>
      <div>
        <h5 className='offcanvas-title'>Offcanvas</h5>
      </div>
      <div className='offcanvas-body'>
        <div>Lorem ipsum</div>
        <div className='dropdown mt-3'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
          >
            Dropdown button
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
