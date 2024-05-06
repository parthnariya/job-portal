import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getJobListAsyncThunk } from "../store/jobportalApi";
import { throttle } from "../utils/thorttlel";

export function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  const { isLoading } = useAppSelector((state) => state.jobportalReducer);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    if (
      !isLoading &&
      window.innerHeight + window.scrollY === document.body.offsetHeight
    ) {
      throttle(undefined, () => {
        dispatch(getJobListAsyncThunk({ offset: page }));
        setPage((prev) => prev + 1);
      },200);
    }
    return;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
