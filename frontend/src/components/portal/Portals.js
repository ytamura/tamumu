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
        <a href="https://www.shutterstock.com/g/tamumu?rid=694477" rel="noreferrer" target="_blank">
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
          <img alt="thumbnail" src="http://t07.deviantart.net/9WcwnqYMc8SZW1PfD1Y2qAnhahg=/300x200/filters:fixed_height(100,100):origin()/pre08/b1ab/th/pre/i/2015/140/9/9/mech_heart_by_tamumu61-d8u5plj.jpg"
          onMouseOver={e => (e.currentTarget.src = 'http://th01.deviantart.net/fs70/200H/i/2014/041/2/8/circle_saver_by_tamumu61-d75x1rx.png')}
          onMouseOut={e => (e.currentTarget.src = 'http://t07.deviantart.net/9WcwnqYMc8SZW1PfD1Y2qAnhahg=/300x200/filters:fixed_height(100,100):origin()/pre08/b1ab/th/pre/i/2015/140/9/9/mech_heart_by_tamumu61-d8u5plj.jpg')}/>
        </a>
      </div>
      <div className="window">
        <span className="category-title right black">painting</span>
        <a href="https://www.deviantart.com/tamumu61/gallery/66145383/painting" rel="noreferrer" target="_blank">
          <img alt="thumbnail" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/de49f43-bfdecb6f-1fc5-4302-9fd6-85c9425703ff.jpg/v1/fill/w_504,h_350,q_70,strp/learning_watercolor_2___iceland_by_tamumu61_de49f43-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTAiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RlNDlmNDMtYmZkZWNiNmYtMWZjNS00MzAyLTlmZDYtODVjOTQyNTcwM2ZmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.__8dYaTAi1i-9ZuGBINmibQ0bzm_rinYl60otQTi_jc'
          onMouseOver={e => (e.currentTarget.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/dbpzkr5-a1d1a0c2-2966-4e76-b973-7dabe1eb6b87.jpg/v1/fill/w_467,h_350,q_70,strp/doge_clock_by_tamumu61_dbpzkr5-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RicHprcjUtYTFkMWEwYzItMjk2Ni00ZTc2LWI5NzMtN2RhYmUxZWI2Yjg3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X9VTs7f4xU7oh_MkZpoiF2hV7714nzKmZF0ftFPaec0')}
          onMouseOut={e => (e.currentTarget.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/de49f43-bfdecb6f-1fc5-4302-9fd6-85c9425703ff.jpg/v1/fill/w_504,h_350,q_70,strp/learning_watercolor_2___iceland_by_tamumu61_de49f43-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTAiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RlNDlmNDMtYmZkZWNiNmYtMWZjNS00MzAyLTlmZDYtODVjOTQyNTcwM2ZmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.__8dYaTAi1i-9ZuGBINmibQ0bzm_rinYl60otQTi_jc')}/>
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
        <span className="category-title bottom white">craft</span>
        <a href="http://tamumu61.deviantart.com/gallery/47925478" rel="noreferrer" target="_blank">
          <img alt="thumbnail" style={{marginLeft: '-25px'}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/dceioxe-40ca7895-6eb7-4b48-bf38-f728024d0bef.jpg/v1/fill/w_525,h_350,q_70,strp/spiderchans_by_tamumu61_dceioxe-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODMiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RjZWlveGUtNDBjYTc4OTUtNmViNy00YjQ4LWJmMzgtZjcyODAyNGQwYmVmLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wf54EPiNEbuuoGg9rTUNR8tLkpbPOpKbuDqA4KuBSDE"
          onMouseOver={e => (e.currentTarget.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/dcme9y1-9963234e-bf1e-4259-9ba6-145d8f7e756e.jpg/v1/fill/w_525,h_350,q_70,strp/left_and_right_shark_earrings_by_tamumu61_dcme9y1-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODMiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RjbWU5eTEtOTk2MzIzNGUtYmYxZS00MjU5LTliYTYtMTQ1ZDhmN2U3NTZlLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I_b8I080znsV3b-lgu1TMkTKSXYWKE5LBgZpBmMzejQ')}
          onMouseOut={e => (e.currentTarget.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29a648d4-a3c1-4cc7-8158-507242777df4/dceioxe-40ca7895-6eb7-4b48-bf38-f728024d0bef.jpg/v1/fill/w_525,h_350,q_70,strp/spiderchans_by_tamumu61_dceioxe-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODMiLCJwYXRoIjoiXC9mXC8yOWE2NDhkNC1hM2MxLTRjYzctODE1OC01MDcyNDI3NzdkZjRcL2RjZWlveGUtNDBjYTc4OTUtNmViNy00YjQ4LWJmMzgtZjcyODAyNGQwYmVmLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wf54EPiNEbuuoGg9rTUNR8tLkpbPOpKbuDqA4KuBSDE')}/>
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