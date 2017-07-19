var querystring = require('querystring');
var React       = require('react');
var axios       = require('axios');
var UserLogin   = require('../components/TelaLogin');
md5             = require('js-md5');

var UserLogin = {
  getByUserLogin: function (user, pswd) {
        //console.log(pswd);
        var pwd = md5(pswd);

//    return axios.post('https://api.orbitallcartoes.com.br/token',
    return axios.post('https://172.18.198.13/token',
    querystring.stringify({
//            username    :"88269981087",
//            password    :"e10adc3949ba59abbe56e057f20f883e",
//            grant_type  :"password"
            username    : user,
            password    : pwd,
            grant_type  : "password"
    }), {
      headers: {
              "Authorization"   :"Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA==",
              "Content-Type"    :"application/x-www-form-urlencoded",
              "systemName"      :"ole",
              "environmentName" :"dev",
              "billingId"       :"55555701632",
              "location"        :"-23.5005995,-46.631207",
              "model"           :"windows 7 pro",
              "version"         :"9.1",
              "isRoot"          :"false",
              "deviceId"        :"ADHFGDSGFDJS1",
              "simCard"         :"BR011293384573763SP",
              "productName"     :"webOle"
}
    }).then(function(response) {
        console.log(response.data, response);

    }).catch((error) => {
          console.log('error ' + error);
    });
   }
};

module.exports = UserLogin;
