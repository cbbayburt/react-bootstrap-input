import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';

import './index.less';
import 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      model: {
        username: "try_me"
      }
    };
  }

  handleFormChange(model, isValid) {
    this.setState({ model: model });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="cover-heading">Bootstrap form elements as React components</h1>
          <br/>
          <p className="lead">A collection of React components which render form elements, with data model handling and optional validation.</p>
          <p className="lead"><a href="#" className="btn btn-lg btn-default">Learn more</a></p>
        </div>
        <div className="col-md-offset-1 col-md-5">
          <Input.Form model={ this.state.model } onChange={this.handleFormChange.bind(this)}>
            <Input.Text key="username" name="username" label="Username" required/>
            <Input.Password key="password" name="password" label="Password" required/>
          </Input.Form>
          <p><span className="fas fa-info-circle"></span> <em>Start typing into the form to see the relevant code snippets.</em></p>
        </div>
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

