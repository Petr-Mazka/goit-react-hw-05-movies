import { SearchForm, Input, Button } from "./MoviesPage.styled";

const MoviesPage = () => {
    return (
        <SearchForm>
            <Input type="text" name="searchWord" placeholder="Search your movie"/>
            <Button type="submit">Search</Button>
        </SearchForm>
    );
}

export default MoviesPage;