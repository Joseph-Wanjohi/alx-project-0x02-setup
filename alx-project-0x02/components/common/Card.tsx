import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      <p className="text-gray-600">
        {content}
      </p>
    </div>
    );
}