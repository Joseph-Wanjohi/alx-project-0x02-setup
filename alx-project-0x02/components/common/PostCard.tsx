import {type PostProps } from "@/interfaces";

export default function Post({ title, content, userID }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      <p className="text-gray-600">
        {content}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Posted by User ID: {userID}
      </p>
    </div>
  );
}