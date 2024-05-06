import { useEffect } from "react";
import "./App.css";
import JobCardList from "./components/JobCardList";
import Navbar from "./components/Navbar";
import Loader from "./components/UI/Loader";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "./store";
import { getJobListAsyncThunk } from "./store/jobportalApi";
function App() {
  useInfiniteScroll();

  const { isLoading } = useAppSelector((state) => state.jobportalReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobListAsyncThunk({ offset: 0 }));
  }, [dispatch]);

  return (
    <main className="main-container">
      <Navbar />
      <JobCardList />
      {isLoading && <Loader />}
    </main>
  );
}

export default App;
