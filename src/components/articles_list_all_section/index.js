import React from 'react';
import Card_article from '../card_article';
import Card from '../Card';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
// import resources from './resources';

const Articles_list_all_section = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);
  const [vidsPerPage] = useState(4);
  const [articles, setArticles] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [articlesSnapshot, podcastsSnapshot, videosSnapshot] = await Promise.all([
          getDocs(collection(db, "articles")),
          getDocs(collection(db, "podcasts")),
          getDocs(collection(db, "videos"))
        ]);
  
        const articles = articlesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        const podcasts = podcastsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const videos = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        setArticles(articles);
        setPodcasts(podcasts);
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchContent();
  }, []);


  
  if (loading) return <p>Loading...</p>;

  
  return (
    <div className='articles-section'>
      <div className='articles-section-header'>
        <ion-icon name="information-circle-outline"></ion-icon>
        <h2><strong>Articles:</strong></h2>
       
      </div>
      <div className='articles-section-list'>
        {articles.map((article) => {
          return (
            <Card_article item={article} />
            )
        })}
    
      </div>
      <div className='articles-section-header'>
        <ion-icon name="play-circle-outline"></ion-icon>
        <h2><strong>Videos:</strong></h2>
     
      </div>
      <div className='articles-section-list'>
        {videos.map((video) => {
          return (
            <Card item={video} />
            )
          })}
      </div>
      <div className='articles-section-header'>
      <ion-icon name="headset"></ion-icon>
        <h2><strong>Podcasts:</strong></h2>
     
      </div>
      <div className='articles-section-list'>
        {podcasts.map((podcast) => {
          return (
            <Card_article item={podcast} />
            )
          })}
      </div>
    </div>
  );
};
export default Articles_list_all_section;