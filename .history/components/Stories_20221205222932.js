import React, { useEffect } from "react";
import faker from "faker";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const Suggestions = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    console.log(Suggestions);
  }, []);

  return (
    <div>
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
    </div>
  );
}

export default Stories;
