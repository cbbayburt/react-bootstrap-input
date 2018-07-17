import React from 'react';
import InputBase from './InputBase';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      isValid: true
    };
  }

  componentWillMount() {
    this.inputs = {};
  }

  componentWillReceiveProps(props) {
    this.setState({
      model: props.model
    });
  }

  registerInput(component) {
    if(component.props && component.props.name) {
      this.inputs[component.props.name] = component;

      const model = this.state.model;
      model[component.props.name] = component.props.value;
      this.setState({
        model: model
      });
      this.validate(component);
    }
  }

  unregisterInput(component) {
    if(component.props && component.props.name) {
      delete this.inputs[component.props.name];

      const model = this.state.model;
      delete model[component.props.name];
      this.setState({
        model: model
      });
    }
  }

  renderChildren(children) {
    if(typeof children !== 'object' || children == null) {
      return children;
    }

    const childrenCount = React.Children.count(children);

    if (childrenCount > 1) {
      return React.Children.map(children, child => this.renderChild(child));
    } else if (childrenCount === 1) {
      return this.renderChild(Array.isArray(children) ? children[0] : children);
    }
  }

  renderChild(child) {
    if (typeof child !== 'object' || child === null) {
      return child;
    }

    if (child.type && child.type.prototype !== null &&
                child.type.prototype instanceof InputBase) {
      let name = child.props && child.props.name;

      if (!name) {
        throw new Error('Can not add input without "name" attribute');
      }

      let newProps = {
        registerInput: this.registerInput.bind(this),
        unregisterInput: this.unregisterInput.bind(this),
        validate: this.validate.bind(this),
        onFormChange: this.onFieldChange.bind(this),
        invalidHint: child.props.invalidHint || (child.props.required && (child.props.label + ' is required.'))
      };

      newProps.value = this.state.model[name] || '';

      return React.cloneElement(child, newProps);
    } else {
      return React.cloneElement(child, {}, this.renderChildren(child.props && child.props.children));
    }
  }

  validate(component, propsIn) {
    const props = propsIn || component.props;
    const name = props.name;
    const results = [];
    let isValid = true;

    if(!props.disabled && (this.state.model[name] || props.required)) {
      if(props.required && !this.state.model[name]) {
        isValid = false;
      } else if(props.validators) {
        const validators = Array.isArray(props.validators) ? props.validators : [props.validators];
        validators.forEach(v => {
          results.push(Promise.resolve(v('' + (this.state.model[name] || ''))));
        });
      }
    }

    Promise.all(results).then(result => {
      result.forEach(r => isValid &= r);
      component.setState({
        isValid: isValid
      }, this.validateForm.bind(this));
    });
  }

  validateForm() {
    let allValid = true;
    const inputs = this.inputs;

    Object.keys(inputs).forEach(name => {
      if(!inputs[name].state.isValid) {
        allValid = false;
      }
    });

    this.setState({
      isValid: allValid
    });

    if(this.props.onValidate) {
      this.props.onValidate(allValid);
    }
  }

  onFieldChange(item) {
    const model = this.state.model;
    model[item.name] = item.value;
    this.setState({
      model: model
    });

    if(this.props.onChange) {
      this.props.onChange(this.state.model, this.state.isValid);
    }
  }

  submit(event) {
    event.preventDefault();
    if(this.state.isValid && this.props.onSubmit) {
      this.props.onSubmit(this.state.model, event);
    } else if (this.props.onSubmitInvalid) {
      this.props.onSubmitInvalid(this.state.model, event);
    }
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)} className={this.props.className}>
        <div className={this.props.divClass}>
          {this.renderChildren(this.props.children)}
        </div>
      </form>
    );
  }
}

export default Form;
