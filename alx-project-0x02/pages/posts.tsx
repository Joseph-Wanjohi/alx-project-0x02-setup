import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data: PostProps[]) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Failed to load posts.')
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Header />

      <div className="min-h-screen bg-blue-50 p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-blue-600">📜 Posts</h1>
          <Button variant="primary" size="medium" onClick={() => alert('Add Post')}>
            ➕ Add New Post
          </Button>
        </div>

        {loading && <p>Loading posts…</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!loading && !error && posts.map(post => (
            <PostCard
              key={post.userId}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
