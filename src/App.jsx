import React from "react";
import "./App.css";
import MovieTable from "./components/MovieTable";
import { getMovies } from "./services/fakeMovieService";
import GenreFilter from "./components/GenreFilter";
import { getGenres } from "./services/fakeGenreService";
import Paginator from "./components/Paginator";
import get from "lodash/get";

const PAGE_SIZE = 4;

class App extends React.Component {
  state = {
    currentGenre: "",
    currentPage: 1,
    allMovies: getMovies(),
    genres: getGenres(),
    sortPath: "",
    sortOrder: "asc",
  };

  handlePageChanged = (pageIndex) => {
    this.setState({ currentPage: pageIndex });
  };

  handleGenreChanged = (genreId = "") => {
    this.setState({ currentGenre: genreId });
  };

  handleMovieLiked = (movieId, isLiked = false) => {
    const newMovies = [...this.state.allMovies];
    const foundMovie = newMovies.find((m) => m._id === movieId);
    foundMovie.liked = isLiked;

    this.setState({ allMovies: newMovies });
  };

  handleDelete = (id) => {
    this.setState({
      allMovies: this.state.allMovies.filter((m) => {
        return m._id !== id;
      }),
    });
  };

  clickOnSorted = (sortPath) => {
    const sortOrder =
      this.state.sortPath === sortPath
        ? this.state.sortOrder === "asc"
          ? "dsc"
          : "asc"
        : "asc";
    const allMovies = [...this.state.allMovies];
    allMovies.sort((m1, m2) => {
      const pm1 = get(m1, sortPath);
      const pm2 = get(m2, sortPath);
      if (sortOrder === "asc") {
        if (pm1 > pm2) return 1;
        if (pm1 < pm2) return -1;
      } else {
        if (pm1 > pm2) return -1;
        if (pm1 < pm2) return 1;
      }
      return 0;
    });
    this.setState({
      allMovies,
      sortPath,
      sortOrder,
    });
  };

  render() {
    const {
      genres,
      allMovies,
      currentPage,
      currentGenre,
      sortPath,
      sortOrder,
    } = this.state;

    const filtered =
      currentGenre === ""
        ? allMovies
        : allMovies.filter((m) => m.genre._id === currentGenre);

    const pageMovies = filtered.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );

    return (
      <div className="h-screen bg-slate-900 text-white select-none">
        <div className="p-4 flex gap-2">
          <div className="w-96">
            <GenreFilter
              genres={genres}
              selectedGenreId={currentGenre}
              onGenreSelected={this.handleGenreChanged}
            />
          </div>
          <div className="px-4 grow flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl">
              Showing {pageMovies.length} movies in the database
            </h1>
            <MovieTable
              movies={pageMovies}
              onMovieLiked={this.handleMovieLiked}
              handleDelete={this.handleDelete}
              clickOnSorted={this.clickOnSorted}
              sortBy={sortPath}
              sortOrder={sortOrder}
            />
            <Paginator
              currentPage={currentPage}
              pageSize={PAGE_SIZE}
              totalCount={allMovies.length}
              onPageSelected={this.handlePageChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
