import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import {
  useGetCommentsMutation,
  usePostCommentMutation,
} from "../Features/comments/commentApiSlice";
import SingleCommentSkeleton from "./SingleCommentSkeleton";
import TypeComment from "./TypeComment";

const CommentBox = ({ postId }) => {
  const [myComments, setMyComments] = useState();
  const [comments, setComments] = useState([]);
  const [getComments, { isLoading }] = useGetCommentsMutation();
  const [postComment, { isLoading: commenting }] = usePostCommentMutation();
  useEffect(() => {
    const fetch = async () => {
      const data = await getComments({ id: postId }).unwrap();
      data && setComments(data);
    };
    fetch();
  }, []);
  const times = 10;
  const postC = async (cmnt) => {
    const data = await postComment({
      postId: postId,
      comment: cmnt.trim(),
    }).unwrap();
    data && setMyComments((prev) => (prev ? [data, ...prev] : [data]));
  };

  if (isLoading)
    return (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <SingleCommentSkeleton key={i} />
        ))}
      </>
    );

  return (
    <>
      <ScrollView keyboardShouldPersistTaps={"allways"}>
        {myComments?.map((item, index) => {
          return <SingleComment key={index} comment={item} />;
        })}
        {comments?.map((item, index) => {
          return <SingleComment key={index} comment={item} />;
        })}
      </ScrollView>

      <TypeComment onClick={(data) => postC(data)} />
    </>
  );
};

export default CommentBox;
