import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export interface UserData {
//   user: {
//     _id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//   };
//   token: string;
// }

interface Unicorn {
  _id: string;
  name: string;
  age: number;
  colour: string;
}

// Define la URL base de la API
const baseUrl = "https://crudcrud.com/api/597f1754e98d404fba8bbb35f8c2754a";

// Define el API Slice utilizando Redux Toolkit Query
export const loginUser = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUnicorns: builder.query<Unicorn, void>({
      query: () => "/unicorns",
    }),
  }),
});

export const { useGetUnicornsQuery } = loginUser;
