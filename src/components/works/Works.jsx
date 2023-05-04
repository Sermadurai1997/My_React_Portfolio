import "./works.scss";
import {useState} from "react";

export default function Works() {

  const [currentSlide,setCurrentSlide] = useState(0)

  const data = [
    {
      id:"1",
      icon:"/assets/mobile1.png",
      desc:"lorem ipsum is simply dummy text of the printing and typewritting industry",
      img:"/data/featured/featured-webRelax.png"
    },
    {
      id:"2",
      icon:"/assets/globe1.png",
      desc:"lorem ipsum is simply dummy text of the printing and typewritting industry",
      img:"/data/content/content-design.png"
    },
    {
      id:"3",
      icon:"/assets/writtingPad1.png",
      desc:"lorem ipsum is simply dummy text of the printing and typewritting industry",
      img:"/data/design/design-socialMedia.png"
    },
    {
      id:"4",
      icon:"/assets/idea1.png",
      desc:"lorem ipsum is simply dummy text of the printing and typewritting industry",
      img:"/data/featured/featured-socialMedia.png"
    },
    {
      id:"5",
      icon:"/assets/award1.png",
      desc:"lorem ipsum is simply dummy text of the printing and typewritting industry",
      img:"/data/design/design-mobile.png"
    }
  ];

  const handleClick = (way) =>{
    way === "left" ?
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 ) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0)
  };



  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}} >
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/downArrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/downArrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />

       
    </div>
  )
}
