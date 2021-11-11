//import "./portfolio.css"
import React from "react";
import Project1 from "../../images/getflexedv2.png";
import Project2 from "../../images/cfi_steph.png";
import Project3 from "../../images/team_generator.png";

function Portfolio() {
  return (
    <div className="portfolio">
     <div class="container">


<div class="card-deck row">

  <div class="col-xs-12 col-sm-6 col-md-4">
  
  <div class="card">

   
    <div class="view overlay">
      <img class="card-img-top" src={Project1} alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

   
    <div class="card-body">

     
      <h4 class="card-title">Get Flexed V2</h4>
   
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
      <button type="button" class="btn btn-light-blue btn-md">Live Site</button>

    </div>

  </div>
  
  </div>

  <div class="col-xs-12 col-sm-6 col-md-4">

  <div class="card mb-4">

  
    <div class="view overlay">
      <img class="card-img-top" src={Project2}  alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    
    <div class="card-body">

     
      <h4 class="card-title">CFI Stephanie</h4>
    
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
      <button type="button" class="btn btn-light-blue btn-md">Live Site</button>

    </div>

  </div>
 
</div>

<div class="col-xs-12 col-sm-6 col-md-4">
  
  <div class="card mb-4">

    
    <div class="view overlay">
      <img class="card-img-top" src={Project3} alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    
    <div class="card-body">

     
      <h4 class="card-title">Team Generator</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
      <button type="button" class="btn btn-light-blue btn-md">Live Site</button>

    </div>

  </div>
 
</div>

{/* <div class="col-xs-12 col-sm-6 col-md-4">

  <div class="card">

    
    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    
    <div class="card-body">

      <h4 class="card-title">4 Card title</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
 
</div>
 
<div class="col-xs-12 col-sm-6 col-md-4">
 
  <div class="card mb-4">

  
    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    
    <div class="card-body">

    
      <h4 class="card-title">5 Card title</h4>
  
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
  
</div>

<div class="col-xs-12 col-sm-6 col-md-4">  
 
  <div class="card mb-4">

    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></img>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    
    <div class="card-body">

      
      <h4 class="card-title">6 Card title</h4>
      
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
 
</div> */}


  
</div>

  
</div>
</div>
  );
}

export default Portfolio;