import React from 'react';
import SectionHeader from '../section_header';
import Card_article from '../card_article';
import Card from '../Card';
import { useState, useEffect } from "react";

const Articles_list_all_section = ({ articles: articlesProp, podcasts: podcastsProp, videos: videosProp, loading: loadingProp }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);
  const [vidsPerPage] = useState(4);
  const [articles, setArticles] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articlesProp) {
      setArticles(articlesProp);
    }
    if (podcastsProp) {
      setPodcasts(podcastsProp);
    }
    if (videosProp) {
      setVideos(videosProp);
    }
    if (loadingProp !== undefined) {
      setLoading(loadingProp);
    }
  }, [articlesProp, podcastsProp, videosProp, loadingProp]);

  
  if (loading) return <p>Loading...</p>;

  
  return (
    <div className='articles-section'>
      <div className='articles-section-header'>
        <SectionHeader iconName="information-circle-outline" title="Articles:" />
      </div>
      <div className='articles-section-list'>
        {articles.map((article) => {
          return (
            <Card_article key={article.id} item={article} />
            )
        })}
    
      </div>
      <div className='articles-section-header'>
        <SectionHeader iconName="play-circle-outline" title="Videos:" />
      </div>
      <div className='articles-section-list'>
        {videos.map((video) => {
          return (
            <Card key={video.id} item={video} />
            )
          })}
      </div>
      <div className='articles-section-header'>
        <SectionHeader iconName="headset" title="Podcasts:" />
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