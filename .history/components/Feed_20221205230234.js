import React from "react";
import Stories from "./Stories";

function Feed() {
  return (
    <div>
      <main className="grid grid-col-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2">
          {/* Stories */}
          <Stories />
          {/* Posts */}
        </section>

        <section>
          {/* Mini Profile */}
          {/* Suggestions */}
        </section>
      </main>
    </div>
  );
}

export default Feed;
