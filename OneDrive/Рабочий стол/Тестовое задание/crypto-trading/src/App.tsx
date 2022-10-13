import React from 'react';
import Header from './components/Header';
import Promo from './components/Promo';
import MouseIcon from './components/MouseIcon';
import AboutUs from './components/AboutUs';
import Future from './components/Future';
import Posts from './components/Posts';



function App() {
  const anchors = {
    promo: 'promo',
    about: 'aboutUs',
    future: 'future-of-cryptocurrency-trading-platform',
    posts: 'articles'
  }

  const links = [
    { title: 'Activities', href: anchors.promo },
    { title: 'Technology', href: anchors.about },
    { title: 'R&D', href: anchors.future },
    { title: 'Community', href: anchors.posts },
    { title: "Career", href: '' }

  ]
  return (
    <div className="App">
      <Header links={links} />
      <Promo anchor={anchors.promo} />
      <MouseIcon />
      <AboutUs anchor={anchors.about} />
      <Future anchor={anchors.future} />
      <Posts anchor={anchors.posts} />
    </div>
  );
}

export default App;
