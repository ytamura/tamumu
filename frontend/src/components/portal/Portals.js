import { useState } from 'react';

import About from './About'


function Portals() {
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  return (
    <div id="portal-view" className="big-window">
      <div className="window">
        <span className="category-title right">drawing</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/1445428" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="drawing1.jpg"
          onMouseOver={e => (e.currentTarget.src = 'drawing2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'drawing1.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title right white">photo</span>
        <a href="https://www.shutterstock.com/g/tamumu" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="photo1.jpg"
          onMouseOver={e => (e.currentTarget.src = 'photo2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'photo1.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title bottom">sketch</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/47902601" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="sketch2.jpg"
          onMouseOver={e => (e.currentTarget.src = 'sketch1.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'sketch2.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title right white">nail art</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/47922013" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="nail1.jpg"
          onMouseOver={e => (e.currentTarget.src = 'nail2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'nail1.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title white">crochet</span>
        <a href="https://www.instagram.com/tamumu61" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="crochet1.jpg"
          onMouseOver={e => (e.currentTarget.src = 'crochet2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'crochet1.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title right black">painting</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/66145383" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src='painting1.jpg'
          onMouseOver={e => (e.currentTarget.src = 'painting2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'painting1.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title right">design</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/935207" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="design2.jpg"
          onMouseOver={e => (e.currentTarget.src = 'design1.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'design2.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title bottom white">clay</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/47925478" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src="clay1.jpg"
          onMouseOver={e => (e.currentTarget.src = 'clay2.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'clay1.jpg')}/>
        </a>
      </div>
      <div className="window about-window" onClick={handleAboutClick}>
        <span className="category-title right" style={{paddingRight: '2px'}}>about</span>
      </div>
      
      {showAbout && <About handleAboutClick={handleAboutClick}/>}

    </div>
  );
}

export default Portals;