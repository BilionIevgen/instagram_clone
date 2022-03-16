import React from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router";
import { CloseIcon } from "../../icons";
import { usePostModalStyles } from "../../styles";
import { Post } from "./Post";

export const PostModal = function () {
  const classes = usePostModalStyles();
  const nav = useNavigate();
  const { postId } = useParams();
  return (
    <>
      <Modal
        isOpen
        overlayClassName={classes.overlay}
        ariaHideApp={false}
        onRequestClose={() => {
          nav(-1);
        }}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            maxWidth: 935,
            width:'100%',
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            margin: 0,
            padding:0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <Post postId={postId} />
      </Modal>
      <div
        className={classes.close}
        onClick={() => {
          nav(-1);
        }}
      >
        <CloseIcon />
      </div>
    </>
  );
};
