import React from "react";
import { PER_PAGE } from '../../constants'
import './pagingButton.css'

export default function PagingButton({ handlePaging, count, page }) {
  const totalPages = Math.ceil(count / PER_PAGE);

  return (
    <>
    <div className='pagingDiv'>
      <button className='button' disabled={page === 1} onClick={handlePaging.prev}>prev</button>
      <span className='pagingSpan'>Page {page} of {totalPages}</span>
      <button className='button' disabled={totalPages === page}onClick={handlePaging.next}>next</button>
    </div>
    </>
  );
}