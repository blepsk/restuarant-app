import React from 'react'
import './Pagination.css'

export const Pagination = ({ postsPerPage, maxPage, paginate, currentPage }) => {
  console.log('log ~ Pagination ~ currentPage', currentPage)
  const pageNumbers = [...Array(maxPage).keys()].map((idx) => idx + 1)

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={number === currentPage ? 'active page-link' : 'page-link'}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
