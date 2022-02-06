'use strict';

const users = {
  id: ['charles1236', 'boyoung1246', 'rlaqhdls2323'],
  pw: ['david2323@', '25631246', 'David2323@@@'],
}

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const {id, pw} = req.body;
    
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: '로그인에 실패하셨습니다.',
    });
  }
}

module.exports = {
  output,
  process,
};