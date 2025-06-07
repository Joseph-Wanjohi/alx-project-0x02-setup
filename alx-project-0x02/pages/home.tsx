import Header from "../components/layout/Header";
export default function Home() {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-600 mb-4">
                        🏠 Welcome to the Home Page!
                    </h1>
                    <p className="text-gray-600 text-lg">
                        This is our cozy living room where we&#39;ll display posts later.
                    </p>
                </div>
            </div>
        </div>
    );
}