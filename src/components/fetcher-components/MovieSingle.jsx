import { Button, Fade, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ShoppingCartActionButtons, {
  BUTTON_TYPE,
} from "../shopping-cart/ShoppingCartActionButtons";
import {
  createPosterPathFull,
  POSTER_SIZES,
} from "../../helper-functions/poster";
import { useDispatch, useSelector } from "react-redux";
import { matchGenreIdsToName } from "../../helper-functions/genres";
import {
  actions as actionsMovieSection,
  MOVIE_SECTION_SCREENS,
} from "../../redux/features/movieSection";
import MockGenres from "../../mockData/mock-data-genre.json";
import CommentSection from "../comment/CommentSection";
import "./MovieSection.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "100%",
    maxWidth: "80vh",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center",
    alignItems: "center",
  },
  containerContent: {
    width: "100%",
    height: "100%",
    fontSize: 12,
    // height: 'fit-content',
  },
  topRow: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "right",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "30vh",
    maxHeight: "50vh",
    height: "80%",
    maxWidth: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    objectFit: "cover",
    background: "red",
  },
  infoContainer: {
    width: "100%",
    textAlign: "left",
    "& *": {
      marginTop: 5,
      marginLeft: 5,
      marginRight: 15,
      marginBottom: 10,
    },
  },
  title: {
    display: "flex",
    fontSize: "1.5em",
    fontWeight: "bold",
    wordWrap: "break-word",
    maxWidth: "90%",
    textShadow: "1px 1px #000",
    marginTop: 15,
  },
  year: {
    display: "flex",
    fontSize: "1em",
    wordWrap: "break-word",
    maxWidth: "90%",
    textShadow: "1px 1px #000",
  },
  ratings: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    fontSize: "0.8em",
    wordWrap: "break-word",
    marginTop: 15,
  },
  containerBottomButtons: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  commentSection: {
    marginTop: 50,
  },
  genres: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "& *": {
      marginTop: 5,
      marginLeft: 5,
      marginRight: 5,
      padding: 5,
      borderRadius: 5,
      background: "rgb(68,68,68, 0.1)",
    },
  },
}));

const MovieSingle = ({ bshow }) => {
  const classes = useStyles();

  const item = useSelector((state) => state.movieSection.selectedMovie);

  const title = item.original_title;
  const releaseDate = item.release_date;
  const itemOverView = item.overview;
  const movieGenresNamed = matchGenreIdsToName(
    item.genre_ids,
    MockGenres.genres
  );
  const posterPath = createPosterPathFull("w500", item.backdrop_path);

  console.log(bshow);
  const timeOutStart = 500;

  const renderBackButton = () => {
    return bshow === "show" ? <ButtonNavigateBack /> : null;
  };

  return (
    <div id="movie-single-container-root" className={classes.root}>
      {renderBackButton()}
      <Fade in={true} timeout={timeOutStart}>
        <div id="movie-single-container" className={classes.containerContent}>
          <Fade in={true} timeout={timeOutStart + 500}>
            <div
              className={classes.mainContainer}
              style={{
                objectFit: "scale-down",
                backgroundImage: `linear-gradient(to top, rgb(36, 36, 36, 0.3), rgb(15, 15, 15, 0.6)), url(${posterPath})`,
              }}
            >
              <Fade in={true} timeout={timeOutStart + 1000}>
                <div className={classes.title}>{title}</div>
              </Fade>
              <Fade in={true} timeout={timeOutStart + 1100}>
                <div className={classes.year}>
                  {String(releaseDate).slice(0, 4)}
                </div>
              </Fade>
            </div>
          </Fade>

          <Fade in={true} timeout={timeOutStart + 1100}>
            <div className={classes.infoContainer}>
              <div className={classes.ratings}>
                <b>{"Popularity"}</b>
                <i>{item.popularity}</i>
                <b>{"Vote average"}</b>
                <i>{item.vote_average}</i>
                <b>{"Vote count"}</b>
                <i>{item.vote_count}</i>
              </div>

              <div className={classes.genres}>
                {movieGenresNamed.map((genre) => {
                  return <div>{genre}</div>;
                })}
              </div>

              <div>{itemOverView}</div>
            </div>
          </Fade>
          
          <Fade in={true} timeout={timeOutStart + 1200}>
            <div className={classes.containerBottomButtons}>
                <ShoppingCartActionButtons
                mItem={item}
                type={BUTTON_TYPE.CART_ADD}
                />
            </div>
          </Fade>

          <Fade in={true} timeout={timeOutStart + 1300}>
            <div className={classes.commentSection}>
                <CommentSection />
            </div>
          </Fade>

        </div>
      </Fade>
    </div>
  );
};

const ButtonNavigateBack = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant={"outlined"}
        color={"primary"}
        style={{ marginTop: 10, marginBottom: 10 }}
        onClick={() => {
          dispatch(
            actionsMovieSection.setScreen(MOVIE_SECTION_SCREENS.SLIDER_MOVIES)
          );
        }}
      >
        {"Back"}
      </Button>
    </div>
  );
};

export default MovieSingle;
