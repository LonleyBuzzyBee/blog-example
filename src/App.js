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
import {
  BrowserRouter as Router, HashRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div className="parent-container">
            <Carousel />
            <Landing_bio />
            <Meetings_info />
            <Articles_section />
          </div>
        } />
        <Route path="/about" element={
          <div className="parent-container">
            <Bio_title />
            <Carousel2 />
            <About_bio_section />
            <Code_of_conduct/>
            <Board_of_directors  />
            <Supporters_and_affiliates/>
          </div>
        } />
        <Route path="/resources" element={
          <div className="parent-container">
            <Articles_list_all_section />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
