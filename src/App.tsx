import { useEffect } from "react";
import "./App.css";
import JobCardList from "./components/JobCardList";
import Navbar from "./components/Navbar";
import { useAppDispatch } from "./store";
import { getJobListAsyncThunk } from "./store/jobportalApi";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobListAsyncThunk({ offset: 0 }));
  }, [dispatch]);

  return (
    <main className="main-container">
      <Navbar />
      <JobCardList />
    </main>
  );
}

export default App;
