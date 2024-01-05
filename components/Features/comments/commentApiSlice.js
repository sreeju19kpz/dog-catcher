import { apiSlice } from "../../app/api/apiSlice";

export const commentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.mutation({
      query: (credentials) => ({
        url: `comments/${credentials.id}/`,
        method: "GET",
      }),
    }),
    postComment: builder.mutation({
      query: (credentials) => ({
        url: `comments/`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useGetCommentsMutation, usePostCommentMutation } =
  commentsApiSlice;
