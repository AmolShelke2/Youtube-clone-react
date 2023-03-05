import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searctTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
