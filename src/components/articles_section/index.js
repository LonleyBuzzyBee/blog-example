import React from 'react';
import Card_article from '../card_article';
import { Button } from 'reactstrap';
import Axios from 'axios';
import { useState, useEffect } from 'react';

const Articles_section = () => {
 const articles = [

{

  title: "Over-Policing Sex Trafficking: How U.S. Law Enforcement Should Reform Operations",
  link: "https://humanrightsclinic.usc.edu/2021/11/15/over-policing-sex-trafficking-how-u-s-law-enforcement-should-reform-operations/",
  pic: "https://storage.googleapis.com/resources-list/over-policing.webp",
  embedId: "",
  auth: "",
  date: "Nov, 2021",
  description: "",
  podcast: ""
},{

  title: "Ten Reasons to Decriminalize Sex Work",
  link: "https://www.opensocietyfoundations.org/publications/ten-reasons-decriminalize-sex-work",
  pic: "https://storage.googleapis.com/resources-list/10-reasons.webp",
  embedId: "",
  auth: "",
  date: "Apr, 2015",
  description: "",
  podcast: ""
},{

  title: "Sex Worker Syllabus: collected writings list",
  link: "https://docs.google.com/document/d/1ziubffIk5wqueSDB6p0OfsajfyyscYsNyWSzT0bXuDc/mobilebasic",
  pic: "https://storage.googleapis.com/resources-list/Sex%20Worker%20Syllabus.png",
  embedId: "",
  auth: "",
  date: "",
  description: "\"Sex Worker Syllabus and Toolkit for Academics\"",
  podcast: ""
}, {

  title: "Portland Police’s “Human Trafficking” Arrests Aren’t What They Seem",
  link: "https://www.wweek.com/news/2021/10/20/portland-polices-human-trafficking-arrests-arent-what-they-seem/",
  pic: "https://storage.googleapis.com/resources-list/portland-polices-human-trafficing-cases-arent-what-they-seem.jpg",
  embedId: "",
  description: "\"Two things were unusual about an arrest at a Ramada Inn on an April evening.\"",
  date: "Oct, 2021",
  auth: "Karina Brown",
  podcast: ""
}]

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
      <div className='section-bottom'>
        <a href="/#/resources"><Button className='section-bottom-button'>More Articles</Button></a>
      </div>
    </div>
  );
};
export default Articles_section;