import { apiSlice } from "../../app/api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPostsFromCommunity: builder.mutation({
      query: (credentials) => ({
        url: `posts/community/${credentials.id}`,
        method: "GET",
      }),
    }),
    getAllPostsForUser: builder.mutation({
      query: () => ({
        url: "posts/feed/all",
        method: "GET",
      }),
    }),
    likePost: builder.mutation({
      query: (credentials) => ({
        url: `posts/${credentials.id}/like`,
        method: "PUT",
      }),
    }),
    getAllPostsFromUser: builder.mutation({
      query: () => ({
        url: `posts/user/all`,
        method: "GET",
      }),
    }),
    getIsUserLikedPost: builder.mutation({
      query: (credentials) => ({
        url: `posts/${credentials.id}/isliked`,
        method: "GET",
      }),
    }),
    getAllComments: builder.mutation({
      query: (credentials) => ({
        url: `posts/${credentials.id}/isliked`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (credentials) => ({
        url: `posts/`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const {
  useGetAllPostsFromCommunityMutation,
  useGetAllPostsForUserMutation,
  useLikePostMutation,
  useGetAllPostsFromUserMutation,
  useGetIsUserLikedPostMutation,
  useCreatePostMutation,
} = postsApiSlice;
