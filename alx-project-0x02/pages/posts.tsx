import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

interface PostsPageProps {
  posts: PostProps[]
}

export default function Posts({ posts }: PostsPageProps) {
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard
              key={post.userId + '-' + post.title}
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

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  type ApiPost = { userId: number; id: number; title: string; body: string }
  const posts: PostProps[] = (data as ApiPost[]).map((p) => ({
    userId: p.userId,
    title: p.title,
    content: p.body,
  }))

  return {
    props: {
      posts,
    },
  }
}
