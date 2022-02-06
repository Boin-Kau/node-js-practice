'use strict';

const id = document.querySelector('#input-id');
const pw = document.querySelector('#input-pw');
const loginBtn = document.querySelector('#btn-login');

const handleLoginClick = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  
}

loginBtn.addEventListener('click', handleLoginClick);
