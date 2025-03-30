// Features.jsx
import React from 'react';
import featureImage from '../assets/image/feature_image.svg';
import EditIcon from '../assets/image/Edit_icon.svg'

const Features = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="mb-4">Light, Fast & Powerful</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus
            </p>
            <p className="mb-5">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </p>
            
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="feature-card mb-4">
                  <img src={EditIcon} alt="Feature icon" className="mb-3" width="50" />
                  <h3 className="h5">Title Goes Here</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget
                    dolor.
                  </p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="feature-card mb-4">
                  <img src={EditIcon} alt="Feature icon" className="mb-3" width="50" />
                  <h3 className="h5">Title Goes Here</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget
                    dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="feature-image">
              <img src={featureImage} alt="App Feature Illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;