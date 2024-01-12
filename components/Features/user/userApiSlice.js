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
      query: () => ({
        url: "users/user/area",
        method: "GET",
      }),
    }),
    getAllACBUserFollows: builder.mutation({
      query: () => ({
        url: "animalcontrollboards/user/area",
        method: "GET",
      }),
    }),
    getAllMessagesFromUser: builder.mutation({
      query: (id) => ({
        url: `messages/${id}`,
        method: "GET",
      }),
    }),
    sendMessage: builder.mutation({
      query: (credentials) => ({
        url: "messages",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getAllNotifications: builder.mutation({
      query: () => ({
        url: "users/notifications",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetuserBannerMutation,
  useUpdateUserAreaMutation,
  useGetUserAreaMutation,
  useGetAllACBUserFollowsMutation,
  useGetAllMessagesFromUserMutation,
  useSendMessageMutation,
  useGetAllNotificationsMutation,
} = usersApiSlice;
