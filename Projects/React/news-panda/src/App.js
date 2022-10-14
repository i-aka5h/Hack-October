import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./components/News";
import SearchNews from "./components/SearchNews";
import SearchInput from "./components/SearchInput";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  const newstypes = [
    {
      key: "general",
      path: "/",
      category: "general"

    },
    {
      key: "sports",
      path: "/sports",
      category: "sports"
    },
    {
      key: "business",
      path: "/business",
      category: "business"
    },
    {
      key: "entertainment",
      path: "/entertainment",
      category: "entertainment"
    },
    {
      key: "health",
      path: "/health",
      category: "health"
    },
    {
      key: "science",
      path: "/science",
      category: "science"
    },
    {
      key: "technology",
      path: "/technology",
      category: "technology"
    }
  ]
  const API_KEY = process.env.NEWS_PANDA_API;
  const pageSize = 9;
  const country = "in";//India
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);
const [queryPath, setQueryPath] = useState("")
  const updateProgress = (rprogress) => {
    setProgress(rprogress);
  };
useEffect(() => {
  setQueryPath(`/search/${query}`)
}, [query])


  return (
    <Router>
      <Navbar title="NewsPanda"/>
      <LoadingBar color="rgb(170,201,235)" height="3px" progress={progress} />

      <div className="container py-5"></div>
      <SearchInput
        query={query}
        setQuery={setQuery}
      />
      <Routes>
        <Route
          exact
          path={queryPath}
          key={query}
          element={
            <SearchNews
              API_KEY={API_KEY}
              key="search"
              pagesize={pageSize}
              query={query}
              setQuery={setQuery}
              updateProgress={updateProgress}
            />
          }
        />

        {newstypes.map((news) => {
          return (
            <Route exact
              path={news.path}
              key={news.key}
              element={
                <News
                  API_KEY={API_KEY}
                  key={news.key}
                  category={news.category}
                  country={country}
                  pageSize={pageSize}
                  updateProgress={updateProgress}
                />
              }
            />
          )
        })}

        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
