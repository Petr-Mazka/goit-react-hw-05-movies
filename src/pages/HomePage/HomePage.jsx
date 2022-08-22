import React from "react";
import TrendingList from "components/TrendingList";

const HomePage = () => {
    return (
        <div>
            <h1>Trending today</h1>
            <TrendingList />
        </div>
    );
}

export default HomePage;