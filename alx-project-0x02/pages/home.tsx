import Header from "../components/layout/Header";
import Card from "../components/common/Card";
export default function Home() {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-green-50 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
                        🏠 Welcome to the Home Page!
                    </h1>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card 
                        title="Learning React"
                        content="React is like building with LEGO blocks. Each component is a reusable piece that we can combine to build amazing websites!"
                        />
                        
                        <Card 
                        title="Next.js Magic"
                        content="Next.js makes React even better by handling routing, performance, and many other features automatically for us."
                        />
                        
                        <Card 
                        title="TypeScript Power"
                        content="TypeScript helps us write better code by catching errors before they happen. It's like having a smart assistant!"
                        />
                        
                        <Card 
                        title="Tailwind CSS"
                        content="Tailwind gives us pre-made styling classes so we can make things look beautiful without writing custom CSS."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}