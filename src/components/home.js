import { useEffect, useState } from "react";
import "../scss/global.css";
import Button from "../utils/Button";
import resume from "../assets/CV_Rohit Kumar_Frontend.pdf";
import profileImg from "../assets/rohit.jpg";
import { Download } from "lucide-react";
import ArrowUp from "../utils/arrow-up";

const Home = () => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    setStyle("zoom-it");
  }, []);

  const downloadResume = () => {
    const pdfUrl = resume;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "CV_Rohit Kumar_Frontend.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <section className="landing-page">
        <div className={`landing-container ${style}`}>
          <div className="profile-picture">
            <img src={profileImg} alt="profile image" />
          </div>
          <h1>Hi,</h1>
          <h5 id="name">I'm Rohit Kumar</h5>
          <p id="profile-desc">
            <span style={{ color: "#0548f2" }}>Frontend web developer</span>{" "}
            based in Noida
          </p>
          <Button className="btn-about-me" onclick={downloadResume}>
            Download CV{" "}
            <span id="download-icon">
              <Download size="15px" />
            </span>
          </Button>
        </div>
      </section>
      <ArrowUp />
    </>
  );
};

export default Home;
