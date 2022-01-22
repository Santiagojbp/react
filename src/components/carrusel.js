
import React from 'react' ;
import imagen1 from "./../assets/img/carrucel/super1.png"
import imagen2 from "./../assets/img/carrucel/super2.jpg"
import imagen3 from "./../assets/img/carrucel/super3.jpg"

				

export default CarruselImg
function CarruselImg() {
	return(
			<React.Fragment>
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img src={imagen1} className="d-block w-100" alt="..."/>
				    </div>
				    <div className="carousel-item">
				      <img src={imagen2} className="d-block w-100" alt="..."/>
				    </div>
				    <div className="carousel-item">
				      <img src={imagen3} className="d-block w-100" alt="..."/>
				    </div>
				  </div>
				  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Previous</span>
				  </button>
				  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Next</span>
				  </button>
				</div>
			</React.Fragment>
		)
}