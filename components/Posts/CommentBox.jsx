import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import {
  useGetCommentsMutation,
  usePostCommentMutation,
} from "../Features/comments/commentApiSlice";
import SingleCommentSkeleton from "./SingleCommentSkeleton";
import TypeComment from "./TypeComment";
import { styles } from "../../StyleSheet";

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
      <View style={[styles.bakColBla]}>
        {Array.from({ length: 7 }).map((_, i) => (
          <SingleCommentSkeleton key={i} />
        ))}
      </View>
    );

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps={"allways"}
        style={[styles.bakColBla]}
      >
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
