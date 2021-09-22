export const checkValidInput = (name, value) => {
  // if (value === '') {
  //   return {
  //     tag: name,
  //     field: value,
  //     error: 'error',
  //     errorMsg: 'empty',
  //   };
  // }

  if (name === 'email address') {
    if (value !== '') {
      if (!isEmail(value)) {
        return {
          tag: name,
          field: value,
          error: 'error',
          errorMsg: 'wrong format',
        };
      }
    }
  }

  return {
    tag: name,
    field: value,
    error: '',
    errorMsg: '',
  };
};

const checkInput = (name, value) => {
  if (value === '') {
    return {
      tag: name,
      field: value,
      error: 'error',
      errorMsg: 'empty',
    };
  }

  if (name === 'email address') {
    if (value !== '') {
      if (!isEmail(value)) {
        return {
          tag: name,
          field: value,
          error: 'error',
          errorMsg: 'wrong format',
        };
      }
    }
  }

  return {
    tag: name,
    field: value,
    error: '',
    errorMsg: '',
  };
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
