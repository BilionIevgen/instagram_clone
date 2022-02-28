import { Hidden } from "@material-ui/core";
import React from "react";
import { FeedPost } from "../components/feed/FeedPost";
import { FeedSideSuggestions } from "../components/feed/FeedSideSuggestions";
import { getDefaultPost } from "../data";
import { useFeedPageStyles } from "../styles";

function FeedPage() {
  const classes = useFeedPageStyles();

  return (
    <div className={classes.container}>
      {/* Posts */}
      <div>
        {Array.from({ length: 5 }, () => getDefaultPost()).map((post) => {
          return <FeedPost key={post.id} post={post} />;
        })}
      </div>
      {/* Sidebar */}
      <Hidden smDown>
        <div className={classes.sidebarContainer}>
          <div className={classes.sidebarWrapper}>
            <FeedSideSuggestions />
          </div>
        </div>
      </Hidden>
    </div>
  );
}

export default FeedPage;
