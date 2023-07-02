import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["User", "Feedback", "Dashboard"],
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (feedback) => ({
        url: `/sentiment/${feedback.name}`,
        method: "POST",
        body: {
          ...feedback,
        },
      }),
      invalidatesTags: ["Dashboard"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: `/auth/register`,
        method: "POST",
        body: {
          ...user,
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        body: {
          ...user,
        },
      }),
    }),
    getFBRating: builder.query({
      query: (name) => ({
        url: `/dashboard/ratings/${name.pathName}`,
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
    getFBSentiments: builder.query({
      query: (name) => ({
        url: `/dashboard/sentiments/${name.pathName}`,
      }),
      providesTags: ["Dashboard"],
    }),
    getFBConsensus: builder.query({
      query: (name) => ({
        url: `/dashboard/consensus/${name.pathName}`,
      }),
      providesTags: ["Dashboard"],
    }),
    getFBKeyword: builder.query({
      query: (name) => ({
        url: `/dashboard/keyword/${name.pathName}`,
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useAddFeedbackMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetFBConsensusQuery,
  useGetFBSentimentsQuery,
  useGetFBRatingQuery,
  useGetFBKeywordQuery,
} = api;
