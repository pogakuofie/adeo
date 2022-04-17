import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adeoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://adeo.app/api/' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: ({ level = 1, course = 1, limit = 20 }) =>
                `get?level_id=${1}&course_id=${1}&limit=${20}`,
        }),
    }),
});
