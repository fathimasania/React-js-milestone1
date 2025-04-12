import React from 'react';

const PricingSection = () => {
  return (
    <section style={{ backgroundColor: '#E7ECFF', width: '100%' }}>
      <div className="container">
        <div className="row justify-content-center text-center py-5">
          <div className="col-lg-8 py-4">
            <h2 className="display-7 mb-8 py-3">A Price To Suit Everyone</h2>
            <p className="h9 text-muted">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>

            <div className="price-display mb-4 py-3">
              <span className="display-6 d-block">$40</span>
              <span className="h9 text-muted">UI Design Kit</span>
            </div>

            <p className="text-muted mb-7 py-3">See, One price. Simple.</p>

            <button className="btn btn-primary purchase-btn">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection