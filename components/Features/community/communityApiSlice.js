import { apiSlice } from "../../app/api/apiSlice";

export const communityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    joinCommunity: builder.mutation({
      query: (credentials) => ({
        url: `communities/${credentials.id}/join`,
        method: "PUT",
      }),
    }),
    getAllCommunities: builder.mutation({
      query: () => ({
        url: "communities/all",
        method: "GET",
      }),
    }),
    getAllJoinedCommunities: builder.mutation({
      query: () => ({
        url: "communities/joined",
        method: "GET",
      }),
    }),
    discoverCommunities: builder.mutation({
      query: () => ({
        url: "communities/discover",
        method: "GET",
      }),
    }),
    getSingleCommunity: builder.mutation({
      query: (credentials) => ({
        url: `communities/${credentials.id}`,
        method: "GET",
      }),
    }),
    getIsUserJoinedCommunity: builder.mutation({
      query: (credentials) => ({
        url: `communities/${credentials.id}/ismember`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAllCommunitiesMutation,
  useGetAllJoinedCommunitiesMutation,
  useDiscoverCommunitiesMutation,
  useGetSingleCommunityMutation,
  useGetIsUserJoinedCommunityMutation,
  useJoinCommunityMutation,
} = communityApiSlice;
