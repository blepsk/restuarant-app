import React from 'react'
import { useState } from 'react'
import './App.css'
import { Post } from './Post'
import { Nav } from './Nav'
import { Pagination } from './Pagination'
import { stockData } from './data.js'

function App() {
  const [posts, setPosts] = useState(stockData)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [searchTerm, setsearchTerm] = useState('')
  // Get current posts
  let currentPosts = posts.filter((post) => {
    let match = true
    if (searchTerm) {
      match = post.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    }

    return match
  })

  const total = currentPosts.length

  const maxPage = Math.ceil(total / postsPerPage)
  const endIdx = currentPage * postsPerPage
  const startIdx = endIdx - postsPerPage

  currentPosts = currentPosts.filter((post, idx) => idx >= startIdx && idx < endIdx)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Nav></Nav>

      <h5>Place List</h5>
      <div className="filterandsearch">
        <input
          className="search-bar"
          type="text"
          placeholder="Search name..."
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </div>

      <Post posts={currentPosts} searchTerm={searchTerm} />
      <Pagination postsPerPage={postsPerPage} maxPage={maxPage} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default App
