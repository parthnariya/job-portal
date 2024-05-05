import { createAsyncThunk } from "@reduxjs/toolkit";
import { JobDetailsType } from "./types";

export const getJobsList = async (offset: number = 0) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers,
      body,
    };

    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw Error("Something went wrong");
    }

    const data: JobDetailsType[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export type GetJobReducerPayloadType = {
  offset: number;
};

export const getJobListAsyncThunk = createAsyncThunk(
  "getJobList",
  async (payload: GetJobReducerPayloadType, { rejectWithValue }) => {
    const { offset } = payload;

    try {
      const data = await getJobsList(offset);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong!!");
    }
  }
);
