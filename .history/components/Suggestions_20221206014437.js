import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      id: i,
    }));

    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return <div>
    {suggestions.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between mt-3 ml-10">
            <img
                src={profile.avatar}
                alt=""
                className="w-10 h-10 rounded-full border p-[2px]"
            />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">{profile.username}</h2>
                <h3 className="text-sm text-gray-400">New to Instagram</h3>
            </div>
  </div>
};

export default Suggestions;
