import React from "react";
import { useLoading } from "./useLoading";

function MovieCard({ movie: { title, plot, poster } }) {
  return (
    <>
      <h3>{title}</h3>
      {poster && <img src={poster} width={100} alt={"Movie poster"} />}
      <div>{plot}</div>
    </>
  );
}

export function ListMovies({ movieApi }) {
  const { loading, error, data } = useLoading(async () =>
    movieApi.listMovies()
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Movies in the database</h1>

      {data.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
