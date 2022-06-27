import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFolder {
  id: string;
  name: string;
}

export const folderApi = createApi({
  reducerPath: "folders",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers, _) => {
      const session = sessionStorage.getItem("notes-token");
      if (session) {
        const { token } = JSON.parse(session);
        headers.set("Authorization", `bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFolders: builder.query<IFolder[], void>({
      query: () => "folders",
    }),
  }),
});

export const { useGetFoldersQuery } = folderApi;
