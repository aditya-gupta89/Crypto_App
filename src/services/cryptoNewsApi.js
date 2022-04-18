import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '9e67507c00msh786e5b81de3a822p1f7545jsn5872fa6f3376'
};
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//     'X-RapidAPI-Key': '9e67507c00msh786e5b81de3a822p1f7545jsn5872fa6f3376'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });