import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';

import './index.less';
import 'bootstrap';
import 'jquery.easing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      model: {
        username: "default_username"
      }
    };
  }

  handleFormChange(model, isValid) {
    this.setState({ model: model });
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Input.Form model={ this.state.model } onChange={this.handleFormChange.bind(this)}>
          <Input.Text key="username" name="username" label="Username" required/>
          <Input.Password key="password" name="password" label="Password" required/>
        </Input.Form>
        <p>{ this.state.model.username }</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
