import React from 'react';

// componnets
import Input from '../inputField';

const Form = props => {
  return (
    <div>
      <form className='wrapper'>
        <Input
          fieldType='input'
          type='text'
          label='Email'
          placeholder='Enter your email'
        />
        <Input
          fieldType='input'
          type='password'
          label='Password'
          placeholder='Enter your password'
        />

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
