import React, { useRef, useEffect, useState } from 'react';
import { CardImg } from 'reactstrap';

const Card_article = ({ item }) => {
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const lineHeight = parseFloat(window.getComputedStyle(textElement).lineHeight);
      const elementHeight = textElement.offsetHeight;
      const numberOfLines = Math.round(elementHeight / lineHeight);
      
      // If text is more than 3 lines, make font smaller
      if (numberOfLines > 3) {
        setFontSize('small');
      } else {
        setFontSize('');
      }
    }
  }, [item.title, item.auth, item.date]);
 
  return (
    <a href={item.link} className="article_item grow">
      <div className="article_item_text" ref={textRef}>
        <h4 className={fontSize ? `article_item_title_${fontSize}` : ''}>
          <strong>{item.title}</strong>
        </h4>
        <p className={fontSize ? `article_item_meta_${fontSize}` : ''}>
          {item.auth}<br/>{item.date}
        </p>
      </div>
      <CardImg className='article_item_image' src={item.pic} alt="Card image cap" />
    </a>
  );
};

export default Card_article;