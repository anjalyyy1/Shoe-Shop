import React, { Component } from 'react';
import Form from './index';
import ValidationUtils from '../../utils/validationUtils';
import UI_STRINGS from '../../utils/stringConstants';
import { get, each } from 'lodash';

class FormPage extends Component {
  state = {
    isShowSubmissionPopup: false,
    form: [
      {
        value: '',
        error: '',
        label: 'Your Email',
        fieldType: 'input',
        type: 'text',
        placeholder: 'Enter your email',
        key: 'email'
      },
      {
        value: '',
        error: '',
        label: 'Your name',
        fieldType: 'input',
        type: 'text',
        placeholder: 'Enter your name',
        key: 'name'
      },
      {
        value: '',
        error: '',
        label: 'Your Thoughts',
        fieldType: 'textarea',
        placeholder: 'Share your thoughts here...',
        key: 'thoughts'
      }
    ]
  };

  /**
   *handle validation for form fields
   * @returns {String} appropriate error message
   */
  handleValidation = (value, key) => {
    if (!ValidationUtils.validateEmail(value) && key === 'email') {
      return UI_STRINGS.VALID_EMAIL_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfEmptyField(value)) {
      return UI_STRINGS.EMPTY_FIELD_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfWhiteSpace(value)) {
      return UI_STRINGS.WHITE_SPACE_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfspecialChar(value)) {
      return UI_STRINGS.SPECIAL_CHAR_ERROR_MESSAGE;
    }

    return null;
  };

  handleInputChange = (e, fieldIndex, fieldKey) => {
    let error = this.handleValidation(e.target.value, fieldKey);

    let { form } = this.state;
    form[fieldIndex].error = error;
    form[fieldIndex].value = e.target.value;

    this.setState({
      form
    });
  };

  /**
   * check if form fields are valid or not
   * @returns Boolean stating whether fields are valid or not
   */
  checkIfFieldsAreValid = () => {
    let { form } = this.state;
    let isFieldValid = true;

    each(form, eachField => {
      eachField.error = this.handleValidation(
        get(eachField, `value`),
        get(eachField, `key`)
      );
      if (eachField.error) {
        isFieldValid = false;
      }
    });

    this.setState({
      form
    });

    return isFieldValid;
  };

  formSubmithandler = e => {
    e.preventDefault();

    if (!this.checkIfFieldsAreValid()) return;
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ isShowSubmissionPopup: true });
      }
    };
    xhr.send(data);
  };

  closePopupHandler = () => {
    this.setState({
      isShowSubmissionPopup: false
    });
  };

  render() {
    const stateMethodProps = {
      ...this,
      ...this.props,
      ...this.state
    };
    return <Form {...stateMethodProps} />;
  }
}

export default FormPage;
