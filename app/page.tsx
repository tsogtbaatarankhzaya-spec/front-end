"use client";

import { useState } from "react";
import Image from "next/image";
import DataJson from "../utils/data.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((person) =>
    person.firstname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((name, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl flex justify-between font-bold text-gray-800 mb-1">
                {name.firstname}
                <span className="text-sm font-normal text-gray-500">Age: {name.age}</span>
              </h3>

              <p className="text-gray-500 text-sm mb-4">{name.email}</p>

                <img src={name.image}/>

              <div>
                <p className="text-xs text-blue-400 font-bold mb-3">
                  Items List
                </p>
                <ul className="space-y-2">
                  {name.items?.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {item.name}
                      <img src={item.image} className="w-24 h-24 rounded-full object-cover"/>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-xl italic">
            Iim nertei hun bhgu baina.
          </div>
        )}
      </div>
    </div>
  );
}