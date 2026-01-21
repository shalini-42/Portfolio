import './Card.css'
const Card = ({images}) =>{
    return (
        <div className="container d-flex align-items-center min-vh-100  min-vw-100 " style={{
backgroundColor:"black",}}>
<div className="row w-100 align-items-center">
<div className="col-md-6" style={{
  paddingBottom:"10px"
}}>
<h1 className=" container-item display-4 fw-bold" style={{ color: "rgb(247, 247, 250)", marginLeft: "100px",marginBottom:"20px",fontFamily:"MS UI Gothic"
  
 }}>Hello I'm Shalini M
</h1>
<h2 className="text-center fw-normal" style={{ color: "rgb(252, 251, 251)",fontSize:"20px",marginLeft:"50px" }}>I’m a passionate Full Stack Developer fresher, eager to build complete web applications using modern frontend and backend technologies.</h2>

</div>
<div className="col-md-6 text-center">
<div className="image mx-auto "
style={{
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, #00f2fe, #4facfe, #a855f7, #00f2fe)",
      padding: "6px",
      boxShadow:
        "0 0 15px #00f2fe, 0 0 70px #4facfe, 0 0 65px #a855f7",
       backgroundImage: "url('/images/profile.jpeg')",
        backgroundSize: "cover",
         backgroundPosition: "0",
         backgroundPositionY:"1px",
         backgroundRepeat: "no-repeat",
    }}
/>

<button 
  onClick={() => window.open("/Shalini_Resume.pdf", "_blank")}
  className="resume-btn" 
>
  View Resume
</button>

</div>
</div>
</div>
    )
}
export default Card;