import Carousel from './components/carousel';
import Landing_bio from './components/landing-bio';
import Bio_title from './components/bio_title';
import Carousel2 from './components/carousel2';
import Articles_section from './components/articles_section';
import Articles_list_all_section from './components/articles_list_all_section';
import About_bio_section from './components/about_bio_section';
import Board_of_directors from './components/board_of_directors_section';
import Supporters_and_affiliates from './components/supporters_and_affiliates_section';
import Meetings_info from './components/meetings_info';
import Code_of_conduct from './components/code_of_conduct_section';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import {
  BrowserRouter as Router, HashRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [articles, setArticles] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [members, setMembers] = useState([]);
  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [articlesSnapshot, podcastsSnapshot, videosSnapshot, membersSnapshot, supportersSnapshot] = await Promise.all([
          getDocs(collection(db, "articles")),
          getDocs(collection(db, "podcasts")),
          getDocs(collection(db, "videos")),
          getDocs(collection(db, "members")),
          getDocs(collection(db, "supporters"))
        ]);
  
        const articlesData = articlesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        const podcastsData = podcastsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const videosData = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const membersData = membersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const supportersData = supportersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        setArticles(articlesData);
        setPodcasts(podcastsData);
        setVideos(videosData);
        setMembers(membersData);
        setSupporters(supportersData);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchContent();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div className="parent-container">
            <Carousel />
            <Landing_bio />
            <Meetings_info />
            <Articles_section articles={articles} />
          </div>
        } />
        <Route path="/about" element={
          <div className="parent-container">
            <Bio_title />
            <Carousel2 />
            <About_bio_section />
            <Code_of_conduct/>
            <Board_of_directors members={members} />
            <Supporters_and_affiliates supporters={supporters} />
          </div>
        } />
        <Route path="/resources" element={
          <div className="parent-container">
            <Articles_list_all_section articles={articles} podcasts={podcasts} videos={videos} loading={loading} />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
