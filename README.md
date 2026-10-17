# Redux Social Media App

My work through the official [Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts), building a small social media feed with **Redux Toolkit** and **RTK Query**. The base project comes from the Redux docs, and I added the code step by step.

## What it covers

- Slices for posts, users and notifications (`createSlice`)
- Async data fetching with `createAsyncThunk` and a mocked REST API (MSW / Mirage)
- Custom middleware and normalized state patterns
- **RTK Query:** `createApi` with `getPosts`, `getPost`, `addNewPost` and `editPost`, tag-based cache invalidation, and advanced querying patterns
- Post reactions, user pages, and a live notifications list

## Tech stack

React 17 · Redux Toolkit · RTK Query · React Redux · React Router 5 · Create React App

## Running locally

```bash
cd redux-starter-kit
npm install
npm start   # http://localhost:3000
```

On Node 17 or later, you may need `export NODE_OPTIONS=--openssl-legacy-provider` first.

## Credits

The starting project and tutorial are from the Redux team ([reduxjs/redux-essentials-example-app](https://github.com/reduxjs/redux-essentials-example-app)).
