import React from 'react';
import {FormGroup, Label, Hint} from './Elements';

class InputBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            showErrors: false
        };
    }

    componentWillReceiveProps(props) {
        if(!(props.value === this.props.value && props.disabled === this.props.disabled)) {
            this.props.validate(this, props);
            this.setState({
                showErrors: false
            });
        }
    }

    componentWillMount() {
        this.props.registerInput(this);
    }

    componentWillUnmount() {
        this.props.unregisterInput(this);
    }

    setValue(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.onFormChange({
            name: name,
            value: value
        });

        if(this.props.onChange)
            this.props.onChange(event);
    }

    onBlur() {
        this.setState({
            showErrors: true
        });
    }

    render() {
        const isError = this.state.showErrors && !this.state.isValid;
        const invalidHint = isError && this.props.invalidHint;
        const hint = [this.props.hint, (invalidHint && this.props.hint && <br/>), invalidHint];
        return (
            <FormGroup isError={isError}>
                { this.props.label && <Label name={this.props.label} className={this.props.labelClass} required={this.props.required}/> }
                <div className={this.props.divClass}>
                    <input className={"form-control" + (this.props.inputClass ? " " + this.props.inputClass : "")}
                            type={this.type} name={this.props.name} value={this.props.value}
                            onChange={this.setValue.bind(this)} disabled={this.props.disabled}
                            onBlur={this.onBlur.bind(this)} placeholder={this.props.placeholder}/>
                    { hint &&
                        <Hint text={hint}/>
                    }
                </div>
            </FormGroup>
        );
    }
}

export default InputBase;
