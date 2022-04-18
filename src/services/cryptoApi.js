import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'X-RapidAPI-Host':'coinranking1.p.rapidapi.com',
     'X-RapidAPI-Key':'9e67507c00msh786e5b81de3a822p1f7545jsn5872fa6f3376'
}
const cryptoApiparams={
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0'
        }
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders,params:cryptoApiparams})

export const cryptoApi=createApi({
   reducerPath:'cryptoApi',
   baseQuery:fetchBaseQuery({baseUrl}),
   endpoints:(builder)=>
   ({
       getCryptos:builder.query({
           query:(count)=>createRequest(`/coins?limit=${count}`),
    }),
   
   getCryptoDetails: builder.query({
    query: (coinId) => createRequest(`/coin/${coinId}`),
  }),

  // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
  getCryptoHistory: builder.query({
    query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
  }),

  // Note: To access this endpoint you need premium plan
//   getExchanges: builder.query({
//     query: () => createRequest('/exchanges'),
//   }),
})
})
export const {useGetCryptosQuery,  useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,}=cryptoApi;
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': '9e67507c00msh786e5b81de3a822p1f7545jsn5872fa6f3376'
//     }
//   }; 
//   https://rapidapi.com/Coinranking/api/coinranking1/