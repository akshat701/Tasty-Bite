import React from 'react';
import './Carousal.css'; // Create and import a custom CSS file

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form className="d-flex " id='search-bar'>
              <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" className="d-block w-100 carousel-image" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_640.jpg" className="d-block w-100 carousel-image" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://hips.hearstapps.com/hmg-prod/images/ice-tea-royalty-free-image-1621872849.jpg?resize=980:*" className="d-block w-100 carousel-image" alt="Ice Tea" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
