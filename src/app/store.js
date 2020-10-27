import { configureStore } from '@reduxjs/toolkit';
import repositorySlice from "../features/repository/repositorySlice";

export default configureStore({
  reducer: {
    repository: repositorySlice,
  },
});
