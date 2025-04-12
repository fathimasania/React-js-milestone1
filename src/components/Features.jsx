// Features.jsx
import React from 'react';
import featureImage from '../assets/image/feature_image.svg';
import EditIcon from '../assets/image/Edit_icon.svg';
import featureImage2 from '../assets/image/feature_image2.svg';
import featureImage3 from '../assets/image/feature_image3.svg';
import featureImage4 from '../assets/image/feature_image4.svg';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="col-12">
          {/* First row content */}
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
          
          {/* Second row content */}
          <div className="row align-items-center my-5 py-4">
            <div className="col-lg-6 order-lg-1">
              <div className="feature-image">
                <img src={featureImage2} alt="App Feature Illustration" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <h3 className="mb-4">Light, Fast & Powerful</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>

          <div className="row align-items-center my-5 py-4">
            <div className="col-lg-6 order-lg-1">
              <div className="feature-image">
                <img src={featureImage3} alt="App Feature Illustration" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <h3 className="mb-4">Light, Fast & Powerful</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. 
              </p>
              <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
          </div>

          <div className="row align-items-center my-5 py-4">
            <div className="col-lg-6 order-lg-1">
              <div className="feature-image">
                <img src={featureImage4} alt="App Feature Illustration" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <h3 className="mb-4">Light, Fast & Powerful</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. 
              </p>
              <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
          </div>

          {/* Pricing Section */}
          
        </div>
      </div>
    </section>
  );
};

export default Features;