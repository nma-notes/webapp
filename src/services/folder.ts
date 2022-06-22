import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface IFolder {
  id: string;
  name: string;
}

export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/folders",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getFolders: builder.query<IFolder, undefined>({
      query: () => "/",
    }),
  }),
});

export default folderApi;
