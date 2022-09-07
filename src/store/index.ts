import {
  configureStore,
  // PayloadAction,
  createSlice,
  createAsyncThunk,
  // AnyAction,
} from "@reduxjs/toolkit";

type FilmState = {
  film: {};
  loading: boolean;
  error: string | null;
};

export const fetchFilm = createAsyncThunk<
  {},
  undefined,
  { rejectValue: string }
>("film/fetchFilm", async function (_, { rejectWithValue }) {
  let data = {
    action: "load",
    cat: 1,
  };

  let response = await fetch("https://loveyoucinema.com/script.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  if (!response.ok) {
    console.log("Ошибка");
    return rejectWithValue("Server Error!");
  }

  const content = await response.json();
  return content;
});

const initialState: FilmState = {
  film: {},
  loading: false,
  error: null,
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.loading = false;
      });
    // .addMatcher(isError, (state, action: PayloadAction<string>) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // });
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export const store = configureStore({
  reducer: {
    film: filmSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
