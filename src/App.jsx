import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout"; 
import MainLayout from "./layouts/MainLayout"; 
import Home from "./pages/Home"; 
import { VideoDetail, ChannelDetail, SearchVideos } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* MainLayout to'g'ridan-to'g'ri bosh sahifa bo'lib ochiladi */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            
            {/* Videoga bosganda kirishi uchun yo'llar to'g'rilandi */}
            <Route path="videodetail/:videoId" element={<VideoDetail />} />
            <Route path="channel/:id" element={<ChannelDetail />} />
            <Route path="search/:searchterm" element={<SearchVideos />} />
          </Route>
        </Route>

        {/* Agar foydalanuvchi eski /main yo'liga kirib qolsa, adashmasligi uchun zaxira yo'l */}
        <Route path="/main" element={<AppLayout />}>
          <Route path="/main" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="videodetail/:videoId" element={<VideoDetail />} />
            <Route path="channel/:id" element={<ChannelDetail />} />
            <Route path="search/:searchterm" element={<SearchVideos />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
