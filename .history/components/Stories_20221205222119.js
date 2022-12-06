import React from "react";

function Stories() {
  useEffect(() => {
    const Suggestions = [...Array(10)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
    });

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
