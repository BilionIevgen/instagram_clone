import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import { LoadingLargeIcon } from "../../icons";
import { useFollowSuggestionsStyles } from "../../styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDefaultUser } from "../../data";
import { Link } from "react-router-dom";
import { FollowButton } from "./FollowButton";

export const FollowSuggestions = function ({hideHeader= false}) {
  const classes = useFollowSuggestionsStyles();
  let loading = false;
  return (
    <div className={classes.container}>
      {!hideHeader && <Typography
        color="textSecondary"
        variant="subtitle2"
        className={classes.typography}
      >
        Suggestions for you
      </Typography>}
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          arrows
          slidesToScroll={3}
          easing="ease-in-out"
          variableWidth
          swipeToSlide
          infinite
          speed={1000}
          dits={false}
          className={classes.slide}
        >
          {Array.from({ length: 10 }, () => getDefaultUser()).map((user) => (
            <FollowSuggestionItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
};

function FollowSuggestionItem({ user }) {
  const classes = useFollowSuggestionsStyles();
  const { profile_image, username, name } = user;
  return (
    <div>
      <div className={classes.card}>
        <Link to={`/${username}`}>
          <Avatar
            src={profile_image}
            alt={`${username}'s prifile`}
            classes={{
              root: classes.avatar,
              img: classes.avatarImg,
            }}
          />
        </Link>
        <Link to={`/${username}`}>
          <Typography
            variant="subtitle2"
            className={classes.text}
            align="center"
          >{username}</Typography>
          <Typography
          color="textSecondary"
            variant="body2"
            className={classes.text}
            align="center"
          >{name}</Typography>
          <FollowButton side={false}/>
        </Link>
      </div>
    </div>
  );
  
}
