import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

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
      <div>
        <div className="masthead clearfix">
          <div className="inner">
            <h3 className="masthead-brand">react-bootstrap-input</h3>
            <nav>
              <ul className="nav masthead-nav">
                <li><a href="https://github.com/cbbayburt/react-bootstrap-input" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg"/> View on GitHub</a></li>
                <li><a className="github-button" href="https://github.com/cbbayburt/react-bootstrap-input" data-icon="octicon-star" data-show-count="true" aria-label="Star cbbayburt/react-bootstrap-input on GitHub">Star</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="inner cover">
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
              <p><FontAwesomeIcon icon={faInfoCircle}/> <em>Start typing into the form to see the relevant code snippets.</em></p>
            </div>
          </div>
        </div>

        <div className="mastfoot">
          <div className="inner">
            <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
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

