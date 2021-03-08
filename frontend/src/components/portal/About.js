function About({ handleAboutClick }) {
  return (
    <div id="about-view" className="big-window">
      <br/>
      <br/>
      <h2>about:tamumu</h2>
      <p>
      2014: The portal is an attempt at updating my familiarity with html/css,
      to which I first got exposed to in
      2002 <strike>(wow, <a href="http://web1.caryacademy.org/facultywebs/gray_rushin/StudentProjects/CompoundWebSites/2002/SodiumCyanide/default.htm"
        rel="noreferrer" target="_blank">it's still there</a>!)</strike>,
      back when frames were cool. Needless to say, I have a ton of catch up to
      do, but I'm hoping that my non-web engineering experiences will help me
      along the way.
      </p>

      <p>At the same time, it's been a good motivator to update my "portfolio"
      of a wide variety of "artwork" I've created over the times. It's all
      over the place in terms of quality, media, and age!
      </p>

      <p>
      This site is merely a portal right now, so it's just linking to folders
      on my deviantART <a href="http://tamumu61.deviantart.com/gallery/"
        rel="noreferrer" target="_blank">gallery</a>, which by the way, is a
        bit painful to navigate. There will be a day when all that stuff will
        be presented neatly on this site...
      </p>

      <p>'Til then,</p>
      <br/>
      <p>y</p>

      <p>2021: flask+react refactor to add apps...</p>

      <div className="window about-window back-window" onClick={handleAboutClick}>
        <span className="category-title">back</span>
      </div>
      
    </div>
  );
}

export default About;