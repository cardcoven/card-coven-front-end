import React from "react";
import { PER_PAGE } from './constants';
import './styles/pagingButton.css';

export default function PagingButton({ handlePaging, count, page }) {
  const totalPages = Math.ceil(count / PER_PAGE);

  return (
    <>
    <div className='pagingDiv'>
      <button className='button' disabled={page === 1} onClick={handlePaging.prev}>prev</button>
      <span className='pagingSpan'>Page {page}</span>
      <button className='button' disabled={totalPages === page}onClick={handlePaging.next}>next</button>
    </div>
    </>
  );
}