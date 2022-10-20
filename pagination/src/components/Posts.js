import React from 'react'
import { SyncLoader } from 'react-spinners'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <SyncLoader color="#36d7b7" />
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts
