'use strict';
var React = require('react');

class ContactForm extends React.Component{
  /**
   * Renders the component.
   * https://facebook.github.io/react/docs/component-specs.html#render
   */
  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h4 id="heading">Send us a Message</h4>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your full name *</label>
            <input className="form-control" name="name" ref="name" required type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email address *</label>
            <input className="form-control" name="email" ref="email" required type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number *</label>
            <input className="form-control" name="phone" ref="phone" required type="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Unit Type</label>
            <input className="form-control" name="unit" ref="unit" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Message</label>
            <textarea className="form-control" name="message" ref="message" rowss="4" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Enquire Now</button>
          </div>
        </form>
      </div>
    );
  }
};

module.exports = ContactForm;