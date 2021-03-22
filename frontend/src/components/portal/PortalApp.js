import './style.css';
import './background.css';
import Portals from './Portals';


function PortalApp() {
  return (
    <div className="portal">
      <div id="bg-line0" className="background-line"></div>
      <div id="bg-line1" className="background-line"></div>
      <div id="bg-line2" className="background-line"></div>
      <div id="tag-line"><h1>port:tamumu</h1></div>
      <div id="profile-links">
        <ul>
          <li>
            <a href="https://twitter.com/tamumu61" rel="noreferrer"
               target="_blank">twitter</a>
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
    </div>
  );
}

export default PortalApp;