import React from "react";

function Details({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Details about Product {params.id}</h1>
    </div>
  );
}

export default Details;
