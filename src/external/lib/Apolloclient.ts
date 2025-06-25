   import { ApolloClient, InMemoryCache } from '@apollo/client';

     const client = new ApolloClient({
       uri: process.env.NEXT_PUBLIC_URL,
       cache: new InMemoryCache(),
       headers:{
        authorization: `Bearer ${process.env.NEXT_PUBLIC_PERMANENT_TOKEN}`
       },
     
     });

     export default client;