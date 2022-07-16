import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-book-2'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}>
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12z' />
    <path d='M19 16H7a2 2 0 0 0-2 2M9 8h6' />
  </svg>
);

export default SvgComponent;
