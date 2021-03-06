import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { usePostSkeletonStyles } from "../../styles";

export  function PostSkeleton() {
  const classes = usePostSkeletonStyles();
  const matches = useMediaQuery('(min-width: 900px)')
  return (
    <div style={{
      gridTemplateColumns: matches && '600px 335px'
    }} className={classes.container}>
      <div className={classes.mediaSkeleton} />
      <div>
        <div className={classes.headerSkeleton}>
          <div className={classes.avatarSkeleton}></div>
          <div className={classes.headerTextSkeleton}>
            <div className={classes.primaryTextSkeleton}></div>
            <div className={classes.secondaryTextSkeleton}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

