export default function UserHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome User 👋</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg">Total Bookings</h3>
          <p className="text-2xl font-bold text-indigo-400">12</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg">Pending Services</h3>
          <p className="text-2xl font-bold text-yellow-400">3</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg">Completed</h3>
          <p className="text-2xl font-bold text-green-400">9</p>
        </div>
      </div>
    </div>
  );
}