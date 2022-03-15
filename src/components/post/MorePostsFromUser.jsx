import React from "react";
import { useMorePostsFromUserStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { LoadingLargeIcon } from "../../icons";
import { getDefaultPost, getDefaultUser } from "../../data";
import GridPost from "../shared/GridPost";
import { Link } from "react-router-dom";

export function MorePostsFromUser() {
  const classes = useMorePostsFromUserStyles();

  let loading = false;

  return (
    <div className={classes.container}>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        component="h2"
        gutterBottom
        className={classes.typography}
      >
        More Posts from {" "}
        <Link to={`${getDefaultUser().username}`}>
          @{getDefaultUser().username}
        </Link>
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {Array.from({ length: 26 }, () => getDefaultPost()).map(post => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </div>
  );
}
