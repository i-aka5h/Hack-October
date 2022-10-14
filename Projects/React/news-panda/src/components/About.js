import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card text-white bg-dark my-5">
          <div className="card-header border-light">
            <b> About Us</b>
          </div>
          <div className="card-body">
            <ul style={{ listStyleType: "square" }}>
              <li>
                <h5>
                  News Panda is a News app build to give important news
                  information to everyone.
                </h5>
              </li>
              <li>
                <h5>React Library is mainly used to build the NewsPanda App</h5>
              </li>
              <li>
                <h5>
                  Bootstrap is Used as the CSS Framework for styling the
                  NewsPanda App
                </h5>
              </li>
              <li>
                <h5>For the latest news News Api is used as the backend.</h5>
              </li>
              <li>
                <h5>Some Features of NewsPanda &rarr;</h5>
                <ul>
                  <li>The app uses News Api to fetch all the data.</li>
                  <li>
                    The user can find news related to different categories on
                    the Landing page.
                  </li>
                  <li>The user can also search news by searching keywords.</li>
                  <li>The app uses function based react components.</li>
                  <li>
                    Some features like Top Loading Bar and Infinite Scroll are
                    also Included.
                  </li>
                  <li>It is completely Device Responsive</li>
                  <li>All the Rights are reserved by News Panda. </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
