import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

export default function ButtonsPage() {
  const handleClick = (message: string) => {
    alert(`You clicked: ${message}`)
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            🎮 Button Component Showcase
          </h1>
          
          {/* Different Variants Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Different Styles (Variants)</h2>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                onClick={() => handleClick('Primary Button')}
              >
                Primary Button
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => handleClick('Secondary Button')}
              >
                Secondary Button
              </Button>
              <Button 
                variant="danger" 
                onClick={() => handleClick('Danger Button')}
              >
                Danger Button
              </Button>
            </div>
          </div>

          {/* Different Sizes Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Different Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="small" 
                onClick={() => handleClick('Small Button')}
              >
                Small Button
              </Button>
              <Button 
                size="medium" 
                onClick={() => handleClick('Medium Button')}
              >
                Medium Button
              </Button>
              <Button 
                size="large" 
                onClick={() => handleClick('Large Button')}
              >
                Large Button
              </Button>
            </div>
          </div>

          {/* Disabled State Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Disabled State</h2>
            <div className="flex flex-wrap gap-4">
              <Button disabled onClick={() => {}}>Disabled Primary</Button>
              <Button variant="secondary" disabled onClick={() => {}}>Disabled Secondary</Button>
              <Button variant="danger" disabled onClick={() => {}}>Disabled Danger</Button>
            </div>
          </div>

          {/* Mixed Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Mixed Examples</h2>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="small"
                onClick={() => handleClick('Small Primary')}
              >
                🚀 Launch
              </Button>
              <Button 
                variant="danger" 
                size="large"
                onClick={() => handleClick('Large Danger')}
              >
                ⚠️ Delete Account
              </Button>
              <Button 
                variant="secondary" 
                size="medium"
                onClick={() => handleClick('Medium Secondary')}
              >
                📄 View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}