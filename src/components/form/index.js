import React from 'react';

// componnets
import Title from '../title';
import Input from '../inputField';
import { get, map } from 'lodash';
import './index.css';

const Form = props => {
  let {
    form,
    formSubmithandler,
    handleInputChange,
    isShowSubmissionPopup,
    closePopupHandler
  } = props;

  return (
    <div className='wrapper'>
      <Title titleText='Contact Us' />
      <span className='helper-text'>
        Please provide your valuable feedback/suggestions or what else you want
        to be added to our menu
      </span>
      {isShowSubmissionPopup && (
        <div
          className='alert alert-warning alert-dismissible fade show'
          role='alert'
        >
          <span>Thanks for the feedback, we appreciate your time.</span>
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <span onClick={closePopupHandler} aria-hidden='true'>
              &times;
            </span>
          </button>
        </div>
      )}
      <form
        onSubmit={formSubmithandler}
        className='wrapper'
        method='POST'
        action='https://formspree.io/anjalyyy1@gmail.com'
      >
        {map(form, (eachField, index) => {
          return (
            <Input
              key={index}
              name={get(eachField, `key`)}
              fieldType={get(eachField, `fieldType`)}
              type={get(eachField, `type`)}
              label={get(eachField, `label`)}
              error={get(eachField, `error`)}
              handleInputChange={e =>
                handleInputChange(e, index, get(eachField, `key`))
              }
            />
          );
        })}

        <button className='btn btn-primary '>Submit</button>
      </form>
    </div>
  );
};

export default Form;
