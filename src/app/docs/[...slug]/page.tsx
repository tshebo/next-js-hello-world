import React from "react";

function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <div>
        Docs {params.slug[0]} {params.slug[1]} page
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>Docs {params.slug[0]} page</div>;
  }
  return <div>Docs home page</div>;
}

export default Docs;
