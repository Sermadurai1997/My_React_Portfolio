import "./testimonial.scss"

export default function Testimonial() {

  const data = [
    {
      id:1,
      name:"Parthiban Ponraj",
      title:"Managing Director of TMT",
      img:"assets/parthiban1.jpeg",
      icon:"assets/twitter.png",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat magnam dolorem."
    },
    {
      id:2,
      name:"Dinesh Kumar",
      title:"Co-Founder of CHEZ",
      img:"assets/dinesh.jpeg",
      icon:"assets/youtube.png",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat magnam dolorem.",
      featured:true
    },
    {
      id:3,
      name:"Gnana Santhar",
      title:"Senior Python Developer",
      img:"assets/santhar.jpeg",
      icon:"assets/linkedin.png",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat magnam dolorem."
    }
  ]
  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/rightArrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />


            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>


          </div>
        ))}
      </div>
       
    </div>
  )
}
