import Data from "../Data/Data";
// import "./About.css";

function About() {
  return (
    <section id="about" className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-md-12">
          <h2 className="mb-3">About Me</h2>

          <h4 className="mb-1">{Data[0].name}</h4>
          <h6 className="text-muted mb-3">{Data[0].role}</h6>

          <p className="about-text">
            {Data[0].about}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;