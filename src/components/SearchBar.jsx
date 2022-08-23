import { SearchForm, Input, Button } from "./SearchBar.styled";

const SearchBar = ({ onSubmit }) => {
    return (
        <SearchForm onSubmit={onSubmit}>
            <Input type="text" name="searchWord" placeholder="Search your movie"/>
            <Button type="submit">Search</Button>
        </SearchForm>
    );
}

export default SearchBar;