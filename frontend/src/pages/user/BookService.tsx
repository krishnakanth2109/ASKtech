import { useState } from "react";

export default function BookService() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    alert("Service Booked!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Book Service</h1>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-md">
        
        <input
          placeholder="Service Type"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full mb-4 p-3 bg-[#020617] border border-white/10 rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 p-3 bg-[#020617] border border-white/10 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}