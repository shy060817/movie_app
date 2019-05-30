import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <h1>
//           {this.props.index}, {this.props.title}
//         </h1>
//         <MoviePoster poster={this.props.poster} />
//       </div>
//     );
//   }
// }

function Movie({ key, title, poster, genres, summary, torrents }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genres, index) => (
            <MovieGenre genres={genres} key={index} />
          ))}
        </div>
        {/* <div className="Movie__Torrents">
          {torrents.map((torrent, index) => (
            <MovieTorrents torrent={torrent} key={index} />
          ))}
        </div> */}
        <p className="Movie__Summary">
          <LinesEllipsis
            text={summary}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
      </div>
    </div>
  );
}

// class MoviePoster extends Component {
//   render() {
//     // console.log(this.props);
//     return <img src={this.props.poster} alt="" />;
//   }
// }

function MoviePoster({ poster, alt }) {
  return <img className="Movie__Poster" src={poster} alt={alt} title={alt} />;
}

function MovieGenre({ genres }) {
  return <span className="Movie__Genre">{genres}</span>;
}

// function MovieTorrents({ torrent }) {
//   console.log(torrent);
//   return <span className="Movie__Torrents">{torrent}</span>;
// }
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genres: PropTypes.string.isRequired
};

// MovieSummary.prototype = {
//   summary: PropTypes.string.isRequired
// };

Movie.prototype = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Movie;
