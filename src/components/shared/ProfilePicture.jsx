import { Person } from "@material-ui/icons";
import React from "react";
import { useProfilePictureStyles } from "../../styles";

export const ProfilePicture = function ({
  size,
  image = "https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/avatar.png",
  isOwner,
}) {
  const classes = useProfilePictureStyles({size, isOwner});
  console.log("image", image);
  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img className={classes.image} src={image} alt="user profile" />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
};
