import { useState } from 'react';
import About from './About'


function Portals() {
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout)
    console.log('yes' + showAbout);
  }

	return (
		<div id="portal-view" className="big-window">
			<div className="window">
				<span className="category-title right">drawing</span>
				<a href="http://tamumu61.deviantart.com/gallery/1445428" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th09.deviantart.net/fs70/200H/i/2012/248/3/7/lightning_by_tamumu61-d5do8wh.jpg" 
					onMouseOver={e => (e.currentTarget.src = 'http://th03.deviantart.net/fs50/200H/f/2009/299/2/3/Jack_Sparrow_by_tamumu61.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th09.deviantart.net/fs70/200H/i/2012/248/3/7/lightning_by_tamumu61-d5do8wh.jpg')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title bottom white">sketch</span>
				<a href="http://tamumu61.deviantart.com/gallery/47902601" rel="noreferrer" target="_blank">				
					<img alt="thumbnail" src="http://th05.deviantart.net/fs70/200H/f/2014/030/b/5/numazu_port_by_tamumu61-d74bjxv.jpg"
					onMouseOver={e => (e.currentTarget.src = 'http://th07.deviantart.net/fs71/200H/f/2014/030/2/b/kauai_by_tamumu61-d74bjxk.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th05.deviantart.net/fs70/200H/f/2014/030/b/5/numazu_port_by_tamumu61-d74bjxv.jpg')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title right white">photo</span>
				<a href="http://tamumu61.deviantart.com/gallery/934823" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th02.deviantart.net/fs71/200H/i/2014/030/f/4/clarity_by_tamumu61-d74gehm.jpg"
					onMouseOver={e => (e.currentTarget.src = 'http://th04.deviantart.net/fs71/200H/f/2014/029/d/1/sunset_at_princeville_by_tamumu61-d74bnkv.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th02.deviantart.net/fs71/200H/i/2014/030/f/4/clarity_by_tamumu61-d74gehm.jpg')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title right white">nail art</span>
				<a href="http://tamumu61.deviantart.com/gallery/47922013" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th08.deviantart.net/fs71/200H/i/2014/030/c/5/abstract_by_tamumu61-d74glbk.jpg"
					onMouseOver={e => (e.currentTarget.src = 'http://th08.deviantart.net/fs70/200H/i/2014/030/d/e/modern_by_tamumu61-d74gl3w.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th08.deviantart.net/fs71/200H/i/2014/030/c/5/abstract_by_tamumu61-d74glbk.jpg')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title bottom">design</span>
				<a href="http://tamumu61.deviantart.com/gallery/935207" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th01.deviantart.net/fs70/200H/i/2014/041/2/8/circle_saver_by_tamumu61-d75x1rx.png"
					onMouseOver={e => (e.currentTarget.src = 'http://t07.deviantart.net/9WcwnqYMc8SZW1PfD1Y2qAnhahg=/300x200/filters:fixed_height(100,100):origin()/pre08/b1ab/th/pre/i/2015/140/9/9/mech_heart_by_tamumu61-d8u5plj.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th01.deviantart.net/fs70/200H/i/2014/041/2/8/circle_saver_by_tamumu61-d75x1rx.png')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title right black">blender</span>
				<a href="http://tamumu61.deviantart.com/gallery/47922006" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th08.deviantart.net/fs70/200H/f/2014/030/9/e/vase_by_tamumu61-d74gb1n.jpg"
					onMouseOver={e => (e.currentTarget.src = 'http://th00.deviantart.net/fs70/200H/f/2014/032/f/6/landscape_by_tamumu61-d74o8bp.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th08.deviantart.net/fs70/200H/f/2014/030/9/e/vase_by_tamumu61-d74gb1n.jpg')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title right">graffiti</span>
				<a href="http://tamumu61.deviantart.com/gallery/934826" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://fc06.deviantart.net/fs70/f/2014/032/3/5/eye_design_by_tamumu61-d74o1vb.png"
					onMouseOver={e => (e.currentTarget.src = 'http://fc05.deviantart.net/fs24/f/2008/026/b/d/Snow_Play_by_tamumu61.png')}
					onMouseOut={e => (e.currentTarget.src = 'http://fc06.deviantart.net/fs70/f/2014/032/3/5/eye_design_by_tamumu61-d74o1vb.png')}/>
				</a>
			</div>
			<div className="window">
				<span className="category-title bottom">craft</span>
				<a href="http://tamumu61.deviantart.com/gallery/47925478" rel="noreferrer" target="_blank">
					<img alt="thumbnail" src="http://th04.deviantart.net/fs71/200H/f/2014/030/7/d/angry_bird___pig_by_tamumu61-d74ghap.jpg"
					onMouseOver={e => (e.currentTarget.src = 'http://fc00.deviantart.net/fs70/f/2014/032/3/4/hayabusa_by_tamumu61-d74qagt.jpg')}
					onMouseOut={e => (e.currentTarget.src = 'http://th04.deviantart.net/fs71/200H/f/2014/030/7/d/angry_bird___pig_by_tamumu61-d74ghap.jpg')}/>
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