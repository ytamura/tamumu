function About({ handleAboutClick }) {
  return (
    <div id="about-view" className="big-window">
      <br/>
      <br/>
      <h2>about:tamumu</h2>
      <p>
      The portal is an ongoing attempt at updating my familiarity with html/css,
      to which I first got exposed to in
      2002 <strike>(<a href="http://web1.caryacademy.org/facultywebs/gray_rushin/StudentProjects/CompoundWebSites/2002/SodiumCyanide/default.htm"
        rel="noreferrer" target="_blank">it's still there</a>!)</strike>,
      which expanded to learning how to build react apps. There is always a ton of catch up to
      do, but I'm hoping that my non-web engineering experiences will help me along the way.
      </p>

      <p>It's been a good motivator to update my "portfolio"
      of a wide variety of "artwork" I've created over the times. It's all
      over the place in terms of quality, media, and age!
      </p>

      <p>
      This site is merely a portal right now, so it's just linking to other sites like
      my deviantART <a href="https://tamumu61.deviantart.com/gallery/"
		    rel="noreferrer" target="_blank">gallery</a>. It's also housing some
random apps like my agile organizer for video games and Japanese counter quiz app for any learners out there.
      </p>

      <p>'Til then,</p>
      <br/>
      <p>y</p>

      <div className="window about-window back-window" onClick={handleAboutClick}>
        <span className="category-title">back</span>
      </div>
      
    </div>
  );
}

export default About;
