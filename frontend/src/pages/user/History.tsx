export default function History() {
  const data = [
    { id: 1, service: "Oil Change", status: "Completed" },
    { id: 2, service: "Car Wash", status: "Pending" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service History</h1>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-white/10 py-3"
          >
            <span>{item.service}</span>
            <span className="text-indigo-400">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}