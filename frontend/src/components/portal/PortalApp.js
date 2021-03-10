import './style.css';
import './background.css';
import Portals from './Portals'

function PortalApp() {
  return (
    <div className="portal">
      {/*<head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content="port:tamumu" />
        <meta property="og:url" content="http://tamumu61.appspot.com" />
        <meta property="og:image" content="http://fc03.deviantart.net/fs71/i/2014/030/f/4/clarity_by_tamumu61-d74gehm.jpg" />

        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-3482093-9', 'tamumu61.appspot.com');
        ga('send', 'pageview');

        </script>
      </head>*/}
      <div id="bg-line0" className="background-line"></div>
      <div id="bg-line1" className="background-line"></div>
      <div id="bg-line2" className="background-line"></div>
      <div id="tag-line"><h1>port:tamumu</h1></div>
      <div id="profile-links">
        <ul>
          <li>
            <a href="http://www.linkedin.com/in/ytamura" rel="noreferrer"
               target="_blank">linkedin</a>
          </li>
          <li>
            <a href="http://www.quora.com/Yuriko-Tamura" rel="noreferrer"
               target="_blank">quora</a>
          </li>
          <li>
            <a href="http://tamumu61.deviantart.com/gallery/" rel="noreferrer"
               target="_blank">deviantART</a>
          </li>
        </ul>
      </div>
      
      <Portals/>
      <div id="footer">
        <small>©2021 port:tamumu. All rights reserved.</small>
      </div>
    </div>
  );
}

export default PortalApp;