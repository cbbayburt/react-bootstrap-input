import React from 'react';
import InputBase from './InputBase';

export class Text extends InputBase {
  constructor(props) {
    super(props);
    this.type = this.props.type || 'text';
  }
}

export class Password extends InputBase {
  constructor(props) {
    super(props);
    this.type = 'password';
  }
}

export class Check extends InputBase {
  constructor(props) {
    super(props);
  }

  setChecked(event) {
    const name = event.target.name;
    const value = event.target.checked;
    this.props.onFormChange({
      name: name,
      value: value
    });

    if(this.props.onChange)
      this.props.onChange(event);
  }

  render() {
    const isError = this.state.showErrors && !this.state.isValid;
    const invalidHint = isError && this.props.invalidHint;
    const hint = [this.props.hint, (invalidHint && this.props.hint && <br/>), invalidHint];
    return (
      <FormGroup isError={isError}>
        <div className={this.props.divClass}>
          <div className="checkbox">
            <label>
              <input className={this.props.inputClass} name={this.props.name}
                type="checkbox" checked={this.props.value}
                onChange={this.setChecked.bind(this)} onBlur={this.onBlur.bind(this)}
                disabled={this.props.disabled}/>
              <span>{this.props.label}</span>
            </label>
          </div>
          { hint &&
                        <Hint text={hint}/>
          }
        </div>
      </FormGroup>
    );
  }
}

export class Select extends InputBase {
  constructor(props) {
    super(props);
  }

  render() {
    const isError = this.state.showErrors && !this.state.isValid;
    const invalidHint = isError && this.props.invalidHint;
    const hasHint = this.props.hint || invalidHint;
    const hint = [this.props.hint, (invalidHint && this.props.hint && <br/>), invalidHint];
    return (
      <FormGroup isError={isError}>
        { this.props.label && <Label name={this.props.label} className={this.props.labelClass} required={this.props.required}/> }
        <div className={this.props.divClass}>
          <select className={'form-control' + (this.props.inputClass ? ' ' + this.props.inputClass : '')}
            name={this.props.name} disabled={this.props.disabled} value={this.props.value}
            onBlur={this.onBlur.bind(this)} onChange={this.setValue.bind(this)}>
            {this.props.children}
          </select>
          { hasHint &&
                        <Hint text={hint}/>
          }
        </div>
      </FormGroup>
    );
  }
}

export const Label = function(props) {
  return (
    <label className={'control-label' + (props.className ? ' ' + props.className : '')}>
      {props.name}
      { props.required ? <span className="required-form-field"> *</span> : undefined }
    </label>
  );
};

export const Hint = function(props) {
  return (
    <div className="help-block">{props.text}</div>
  );
};

export const FormGroup = function(props) {
  return (
    <div className={'form-group' + (props.isError ? ' has-error' : '')}>
      {props.children}
    </div>
  );
};
