'use strict';

const id = document.querySelector('#input-id');
const pw = document.querySelector('#input-pw');
const loginBtn = document.querySelector('#btn-login');

const handleLoginClick = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if(res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('로그인 중에 에러 발생');
    });
}

loginBtn.addEventListener('click', handleLoginClick);
