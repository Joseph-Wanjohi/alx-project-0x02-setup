import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address, phone }: UserProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{name}</h2>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">
        Address: {address.street}, {address.city}, {address.zipcode}, {address.country}
      </p>
      <p className="text-gray-600">Phone: {phone}</p>
    </div>
  );
}