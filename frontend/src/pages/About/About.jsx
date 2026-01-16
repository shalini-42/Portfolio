
import './About.css'
const About = () => {
  return (
    <div className="profile-section">
      
      <div className="profile-container">
        {/* Left Image */}
        <div className="profile-image">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
          />
        </div>

        {/* Right Content */}
        <div className="profile-content">
          <p><span>Name:</span> Shalini M</p>
          <p><span>Highest Qualification:</span> Bachorle of Computer Application (BCA)</p>
          <p>
            <span>College:</span>Government College For Women, Maddur
          </p>
          <p><span>Location:</span> Bangalore, India</p>
          <p>
            <span>Technical Skills:</span> Python, Django, HTML, CSS,
             MySQL, MongoDB, Git
          </p>
          <p>
            <span>Interests:</span> Full Stack Web Development
          </p>
          <p>
            <span>Summary:</span> I am a passionate Full Stack Developer with
            expertise in Python, Django, and Frontend Technologies. I love
            building scalable web applications and solving complex problems.
            I am a quick learner and always looking for new challenges and
            opportunities to grow.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default About;
