import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TreeResponse} from "./types.ts";

const ID = 137658;


// {
//     "id": 137658,
//     "rowName": "309912d6-aae0-4fb7-a792-90b4bc2a4a4b"
// }


export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://185.244.172.108:8081/',
    }),
    endpoints: builder => {
        return {
            getTreeRows: builder.query<TreeResponse[], void>({
                query: () => `/v1/outlay-rows/entity/${ID}/row/list`,
            }),
        };
    },
    reducerPath: 'baseApi',
});

export const {useGetTreeRowsQuery} = baseApi;
