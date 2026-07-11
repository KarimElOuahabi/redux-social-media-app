import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { useGetPostsQuery } from '../../api/apiSlice'
import classNames from 'classnames'

let PostExcerpt = ({ post  }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}...</p>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ) 
}

PostExcerpt = React.memo(PostExcerpt)

export const PostsList = () => {
  const { data: posts = [], isLoading, isFetching, isSuccess, isError, error, refetch } = useGetPostsQuery()

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice()
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date))
    return sortedPosts
  })

  let content

  if (isLoading) {
    content = <div className="loader">Loading...</div>
  } else if (isSuccess) {

    const renderedPosts = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
    const containerClassname = classNames('posts-container', { disabled: isFetching })
    content = <div className={containerClassname}>{renderedPosts}</div>
  } else if (isError) {
      content = <div>{error.toString()}</div>
  } 

  

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <button className="button" onClick={refetch}>Refresh Posts</button>
      {content}
    </section>
  )
}
