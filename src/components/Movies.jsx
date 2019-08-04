import React, { Component } from "react";
import { getMovies } from "../service/fakeMoviesService";
import { getGenres } from "../service/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete(moive) {
    const newMovie = this.state.movies.filter(ele => moive._id !== ele._id);
    this.setState({
      movies: newMovie
    });
  }

  handleLike = item => {
    const newMovies = [...this.state.movies];
    let index;
    newMovies.filter((moive, i) => {
      if (moive._id === item._id) {
        return (index = i);
      }
    });
    newMovies[index].love = !newMovies[index].love;
    this.setState({ movies: newMovies });
  };

  handleChangePage = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      genres,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(ele => ele.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    // movies: allMovies 这样写 就是重命名movies

    const movies = paginate(sorted, currentPage, pageSize);

    return filtered.length === 0 ? (
      <p>还剩下{"nothing"}条</p>
    ) : (
      <div className="row">
        <div className="col-2">
          <ListGroup
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
            items={genres}
          />
        </div>
        <div className="col-6">
          <p>还剩下{filtered.length}条</p>
          <MoviesTable
            sortColumn={sortColumn}
            onDelete={item => this.handleDelete(item)}
            onLike={this.handleLike}
            movies={movies}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}
