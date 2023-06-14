import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["User", "Feedback", "Dashboard"],
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (feedback) => ({
        url: `/feedback/${feedback.name}`,
        method: "POST",
        body: {
          ...feedback,
        },
      }),
      invalidatesTags: ["Dashboard"],
    }),
    registerUser: builder.mutation({
      query:(user)=>({
        url:`/auth/register`,
        method:"POST",
        body:{
          ...user,
        }
      })
    }),
    loginUser: builder.mutation({
      query:(user)=>({
        url:`/auth/login`,
        method:"POST",
        body:{
          ...user,
        }
      })
    })
  }),
});

export const {
    useAddFeedbackMutation,
    useLoginUserMutation,
    useRegisterUserMutation
} = api

