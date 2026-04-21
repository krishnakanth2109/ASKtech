import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("user@gmail.com");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-md">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 bg-[#020617] border border-white/10 rounded"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-[#020617] border border-white/10 rounded"
        />

        <button className="bg-indigo-600 px-4 py-2 rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
}