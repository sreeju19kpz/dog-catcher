import { apiSlice } from "../../app/api/apiSlice";

export const reportsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllReportsForUser: builder.mutation({
      query: () => ({
        url: "acbreports/user",
        method: "GET",
      }),
    }),
    acbGetReportDetails: builder.mutation({
      query: (credentials) => ({
        url: `acbreports/${credentials.id}/details`,
        method: "GET",
      }),
    }),
    acbLike: builder.mutation({
      query: (credentials) => ({
        url: `acbreports/${credentials.id}/like`,
        method: "PUT",
      }),
    }),
    acbGetIsUserLiked: builder.mutation({
      query: (credentials) => ({
        url: `acbreports/${credentials.id}/isliked`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAcbGetReportDetailsMutation,
  useAcbGetIsUserLikedMutation,
  useAcbLikeMutation,
  useGetAllReportsForUserMutation,
} = reportsApiSlice;
