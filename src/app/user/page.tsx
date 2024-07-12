type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="flex flex-col gap-8  mt-10 place-items-center">
      <h2 className="text-4xl font-bold">User Details</h2>
      <div className="grid grid-cols-2 gap-6">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="bg-pink-100 text-blue-800 px-6 py-4 rounded-md shadow-md "
          >
            <h4 className="font-bold text-xl">{user.name}</h4>
            <div className=" flex justify-between ">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
