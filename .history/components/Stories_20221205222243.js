import React from "react";

function Stories() {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    console.log(suggestions);
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
