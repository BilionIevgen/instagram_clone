import React from "react";
import { useFeedPostSkeletonStyles } from "../../styles";

export default function FeedPostSkeleton() {
  const classes = useFeedPostSkeletonStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerSkeleton}>
        <div className={classes.avatarSkeleton}></div>
        <div className={classes.headerTextSkeleton}>
          <div className={classes.primaryTextSkeleton}></div>
          <div className={classes.secondaryTextSkeleton}></div>
        </div>
      </div>
      <div className={classes.mediaSkeleton}/>
    </div>
  );
}
