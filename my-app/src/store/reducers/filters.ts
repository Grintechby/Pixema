import { createSlice } from "@reduxjs/toolkit";
import { getCurrentYear } from "../../components/helpers/getYear";


const initialState = {
    visible: false,
    checkedFilters: false,
    filters: {
        year: [1990, getCurrentYear()],
        rating: [1, 10],
        sortBy: '-1',
        genres: [],
    },
    defaultValues: {
        year: [1990, getCurrentYear()],
        rating: [1, 10],
        sortBy: '-1',
        genres: [],
    }
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterYear: (state, action) => {
            state.filters.year = action.payload;
        },
        setFilterRating: (state, action) => {
            state.filters.rating = action.payload;
        },
        setFilterSortBy: (state, action) => {
            state.filters.sortBy = action.payload;
        },
        setFilterGenres: (state, action) => {
            state.filters.genres = action.payload;
        },
        setVisibleFilter: (state, action) => {
            state.visible = action.payload;
        },
        setCheckedFilter: (state, action) => {
            state.checkedFilters = action.payload;
        }
    }
});

export const {
    setCheckedFilter,
    setFilterGenres,
    setFilterRating,
    setFilterSortBy,
    setFilterYear,
    setVisibleFilter
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;