import { Avatar, Grid, Typography } from "@material-ui/core";
import useOutsideClick from "@rooks/use-outside-click";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { defaultNotifications } from "../../data";
import { useNotificationListStyles } from "../../styles";
import { FollowButton } from "../shared/FollowButton";

export function NotificationList({ handleHideList }) {
  const classes = useNotificationListStyles();
  const listRef = React.useRef();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);

    return () => {
      setIsActive(false);
    };
  }, []);

  // invoke function when click is outside of ref
  useOutsideClick(listRef, handleHideList, isActive);
  return (
    <Grid ref={listRef} container className={classes.listContainer}>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === "like";
        const isFollow = notification.type === "follow";
        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `likes your photo. 4d`}
                  {isFollow && `started following you. 5d`}
                </Typography>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <Avatar src={notification.post.media} alt="post cover" />
                </Link>
              )}
              {isFollow && <FollowButton />}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
