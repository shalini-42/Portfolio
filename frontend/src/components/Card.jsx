const Card = ({images}) =>{
    return (
        <section id="home" className="container d-flex align-items-center min-vh-100  min-vw-100 " style={{
backgroundColor:"black"
}}>
<div className="row w-100 align-items-center">
<div className="col-md-6" >
<h1 className="display-4 fw-bold" style={{ color: "rgba(244, 247, 248, 1)" }}>Hello Shalini M
</h1>
<h2 className="fw-normal" style={{ color: "rgba(244, 246, 247, 1)" }}>I’m a passionate Full Stack Developer fresher, eager to build complete web applications using modern frontend and backend technologies.</h2>

</div>
<div className="col-md-6 text-center">
<div className=" mx-auto "
style={{
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, #00f2fe, #4facfe, #a855f7, #00f2fe)",
      padding: "6px",
      boxShadow:
        "0 0 15px #00f2fe, 0 0 70px #4facfe, 0 0 15px #a855f7",
       backgroundImage: "url('/images/profile.jpeg')",
        backgroundSize: "cover",
         backgroundPosition: "10px",
         backgroundRepeat: "no-repeat",
    }}
/>
<div
style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundImage: "url('/images/profile.jpeg')",
        backgroundSize: "cover",
       
        
      }}
/>
</div>
</div>
</section>
    )
}
export default Card;