import { useState } from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import PostModal from '@/components/common/PostModal'
import { type Post } from '@/interfaces'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Learning React",
      content: "React is like building with LEGO blocks. Each component is a reusable piece that we can combine to build amazing websites!"
    },
    {
      id: 2,
      title: "Next.js Magic",
      content: "Next.js makes React even better by handling routing, performance, and many other features automatically for us."
    }
  ])

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content
    }
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-green-600">
              🏠 Welcome to the Home Page!
            </h1>
            <Button
              variant="primary"
              size="medium"
              onClick={() => setIsModalOpen(true)}
            >
              ➕ Add New Post
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  )
}