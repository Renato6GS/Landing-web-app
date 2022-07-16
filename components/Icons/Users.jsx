import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-users'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}>
    <path d='M0 0h24v24H0z' stroke='none' />
    <circle cx={9} cy={7} r={4} />
    <path d='M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85' />
  </svg>
);

export default SvgComponent;
