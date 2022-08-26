import { logout, setUser } from "../reducers/auth";
import { setCheckedFilter, setFilterGenres, setFilterRating, setFilterSortBy, setFilterYear, setVisibleFilter } from "../reducers/filters";
import { loadMoreMovies } from "../reducers/load";
import { setTheme } from "../reducers/theme";

export {
    setTheme,
    loadMoreMovies,
    setCheckedFilter,
    setFilterGenres,
    setFilterRating,
    setFilterSortBy,
    setFilterYear,
    setVisibleFilter,
    setUser,
    logout
}