import React from "react";

const MovieForm = ({match, history}) => {
  return (
      <React.Fragment>
        <h4>Movie From {match.params.id}</h4>
        <button className='btn btn-primary' onClick={() =>history.push('/movies')}>Save</button>
      </React.Fragment>
  )
};

export default MovieForm;
