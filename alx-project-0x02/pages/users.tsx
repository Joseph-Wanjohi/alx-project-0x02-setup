import Header from "@/components/layout/Header";

import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">👥 Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              phone={user.phone}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Users

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  type ApiUser = {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      country?: string;
      zipcode: string;
    };
  };

  const users: UserProps[] = data.map((u: ApiUser) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    address: {
      street: u.address.street,
      city: u.address.city,
      country: u.address.country || "Unknown",
      zipcode: u.address.zipcode,
    },
  }))

  return {
    props: { users },
  }
}