import "./portfolio.css";
import React from "react";
import Project1 from "../../images/getflexedv2.png";
import Project2 from "../../images/cfi_steph.png";
import Project3 from "../../images/team_generator.png";
import Project4 from "../../images/get_flexed.png";
import Project5 from "../../images/coding_quiz.png";
import Project6 from "../../images/work_day_scheduler.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
    <div className="portfolio mt-4">
      <div class="container">
        <div class="card-deck row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project1}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">Get Flexed V2</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <a
                  href="https://peaceful-dawn-49261.herokuapp.com/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card mb-4">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project2}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">CFI Stephanie</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <a
                  href="https://sheylapopovich.github.io/CFI-Steph/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue  btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card mb-4">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project3}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">Team Generator</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <a
                  href="https://drive.google.com/file/d/1tflXE48IKSXCOYNNvRSs_UBMKOgoqlxK/preview"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project4}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">Get Flexed</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://sheylapopovich.github.io/get-flexed/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue  btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card mb-4">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project5}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">Coding Quiz</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://sheylapopovich.github.io/coding-quiz-challenge/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue  btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card mb-4">
              <div class="view overlay">
                <img
                  class="card-img-top"
                  src={Project6}
                  alt="Card image cap"
                ></img>
                <a href="#!">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title">Day Scheduler</h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://sheylapopovich.github.io/work-day-scheduler/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-light-blue  btn-primary">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
