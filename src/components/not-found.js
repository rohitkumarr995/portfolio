import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    if (timer > 0) {
      let timeout = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timer]);

  if (timer === 0) {
    navigate("/home");
  }

  return (
    <>
      <section className="notfound-page">
        <div className="notfound-container">
          <h1>Page Not Found!</h1>
          <p id="notfound-desc">You will be redirected to homepage in</p>
          <h3 id="timer">{timer}</h3>
        </div>
      </section>
    </>
  );
};

export default NotFound;
