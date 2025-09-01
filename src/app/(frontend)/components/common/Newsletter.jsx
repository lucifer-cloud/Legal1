import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="newsletter_flex">
              <div className="power_newsletter_title">
                <h4>Subscribe to newsletter</h4>
              </div>
              <div className="power_newsletter">
                <form method="post" action="#" className="form-checkin">
                  <input type="text" name="email" className="form-control" placeholder="E-mail Address*" />
                  <button type="submit" name="submit" className="newsletter_button">
                    <i className="ion-ios-paperplane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;