import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import store from './shared/utils/redux/store';
import { Provider } from 'react-redux';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
      <Provider store={store}>
      <App/>
      </Provider>
      </ApolloProvider> 
  </React.StrictMode>
);

