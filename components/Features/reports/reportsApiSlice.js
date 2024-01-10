import { apiSlice } from "../../app/api/apiSlice";

export const reportsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllReports: builder.mutation({
      query: () => ({
        url: "reports/",
        method: "GET",
      }),
    }),
    getAllReportsFromArea: builder.mutation({
      query: () => ({
        url: "reports/area",
        method: "GET",
      }),
    }),

    getAllReportsByUser: builder.mutation({
      query: () => ({
        url: "reports/user",
        method: "GET",
      }),
    }),
    getReportDetails: builder.mutation({
      query: (credentials) => ({
        url: `reports/${credentials.id}`,
        method: "GET",
      }),
    }),
    getAllSavedReports: builder.mutation({
      query: () => ({
        url: "reports/saved/",
        method: "GET",
      }),
    }),
    createReport: builder.mutation({
      query: (credentials) => ({
        url: "reports/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getReportStatus: builder.mutation({
      query: (credentials) => ({
        url: `reports/${credentials.id}/status`,
        method: "GET",
      }),
    }),
    like: builder.mutation({
      query: (credentials) => ({
        url: `reports/${credentials.id}/like`,
        method: "PUT",
      }),
    }),
    getIsUserLiked: builder.mutation({
      query: (credentials) => ({
        url: `reports/${credentials.id}/isliked`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAllReportsMutation,
  useCreateReportMutation,
  useGetAllSavedReportsMutation,
  useGetReportDetailsMutation,
  useGetReportStatusMutation,
  useLikeMutation,
  useGetAllReportsByUserMutation,
  useGetIsUserLikedMutation,
  useGetAllReportsFromAreaMutation,
  useGetAllReportsForUserMutation,
} = reportsApiSlice;
