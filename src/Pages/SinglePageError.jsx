import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default SinglePageError;
