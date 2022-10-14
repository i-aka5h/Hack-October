
import './App.css';
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
      path: "business",
      category: "business"
    },
    {
      key: "entertainment",
      path: "entertainment",
      category: "entertainment"
    },
    {
      key: "health",
      path: "health",
      category: "health"
    },
    {
      key: "science",
      path: "science",
      category: "science"
    },
    {
      key: "technology",
      path: "technology",
      category: "technology"
    }
  ]

  const pageSize = 9;
  const country = "in";


  return (
    <Router>
      <Navbar />
      <SearchInput />
      <Routes>
        {newstypes.map((news) => {
          return (
            <Route exact
              path={news.path}
              element={
                <News
                  key={news.key}
                  category={news.category}
                  country={country}
                  pageSize={pageSize}
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
