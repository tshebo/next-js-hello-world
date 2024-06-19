import React from "react";

function ReviewDetail({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
    return <div>
        <h1>Review {params.reviewId} for product {params.id }</h1>
  </div>;
}

export default ReviewDetail;
