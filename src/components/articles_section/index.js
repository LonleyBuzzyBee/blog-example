import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../section_header';
import Card_article from '../card_article';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';

const Articles_section = ({ articles: articlesProp }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articlesProp && articlesProp.length > 0) {
      setArticles(articlesProp);
    }
  }, [articlesProp]);

  return (
    <div className='articles-section'>
      <div className='articles-section-header'>
        <SectionHeader iconName="information-circle-outline" title="Articles:" />
      </div>
      <div className='articles-section-list'>
        {articles.map((article) => {
          return (
            <Card_article item={article} />
          )
        })}
      </div>
      <div className='section-bottom'>
        <Link to="/resources"><Button className='section-bottom-button'>More Articles</Button></Link>
      </div>
    </div>
  );
};
export default Articles_section;