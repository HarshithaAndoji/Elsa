import StAnnsLogo from "../assets/StAnnsLogo.jpg";
import StPiousLogo from "../assets/StPiousLogo.jpg";
import OuLogo from "../assets/OuLogo.jpg";

const Education = () => {
  return (
    <>
        <div id="education">
          <h1 className="education-title reveal-left">
            <span id="letter">E</span>ducation
          </h1>
          <div className="timeline reveal-right">
            <div className="timeline-item">
              <div className="logo-container">
                <img src={StAnnsLogo} alt="St Anns" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">St. Ann's Junior College</p>
                <p className="edu-degree">Intermediate (MPC)</p>
                <p className="edu-year">2017 - 2019</p>
              </div>
            </div>

            <div className="timeline-bar"></div>

            <div className="timeline-item">
              <div className="logo-container">
                <img src={StPiousLogo} alt="St Pious" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">
                  St. Pious X Degree And PG College
                </p>
                <p className="edu-degree">B.Sc Computer Science (MPCs)</p>
                <p className="edu-year">2019 - 2022</p>
              </div>
            </div>

            <div className="timeline-bar"></div>

            <div className="timeline-item">
              <div className="logo-container">
                <img src={OuLogo} alt="OU" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">PGRRCDE-Osmania University</p>
                <p className="edu-degree">Master of Computer Applications</p>
                <p className="edu-year">2022 - 2024</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Education
