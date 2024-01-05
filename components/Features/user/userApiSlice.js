import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getuserBanner: builder.mutation({
      query: () => ({
        url: "users/user/banner",
        method: "GET",
      }),
    }),
    updateUserArea: builder.mutation({
      query: (credentials) => ({
        url: "users/user/area",
        method: "PUT",
        body: { ...credentials },
      }),
    }),
    getUserArea: builder.mutation({
      query: (credentials) => ({
        url: "users/user/area",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetuserBannerMutation,
  useUpdateUserAreaMutation,
  useGetUserAreaMutation,
} = usersApiSlice;
