'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[{
  "username": "eestrella0",
  "createdAt": "8/3/2017",
  "updatedAt": "5/10/2017",
  "password": "cNhjhYwnf",
  "userstatus": "inactive",
  "email": "lboundy0@google.co.jp"
}, {
  "username": "pbeale1",
  "createdAt": "11/17/2016",
  "updatedAt": "5/2/2017",
  "password": "mMO60APhVDsX",
  "userstatus": "inactive",
  "email": "adyshart1@usda.gov"
}, {
  "username": "akettleson2",
  "createdAt": "10/3/2017",
  "updatedAt": "12/12/2016",
  "password": "Z9KNi6rYegXr",
  "userstatus": "inactive",
  "email": "tgooble2@narod.ru"
}, {
  "username": "nchessil3",
  "createdAt": "11/26/2016",
  "updatedAt": "2/26/2017",
  "password": "KdZfenint4Y",
  "userstatus": "active",
  "email": "ccloonan3@state.gov"
}, {
  "username": "hbunce4",
  "createdAt": "3/9/2017",
  "updatedAt": "6/7/2017",
  "password": "zGoQxmI5",
  "userstatus": "inactive",
  "email": "gbooij4@liveinternet.ru"
}, {
  "username": "dosment5",
  "createdAt": "3/17/2017",
  "updatedAt": "7/30/2017",
  "password": "p4Y9HoTUSRq9",
  "userstatus": "active",
  "email": "claverenz5@odnoklassniki.ru"
}, {
  "username": "msurby6",
  "createdAt": "10/25/2017",
  "updatedAt": "11/7/2016",
  "password": "X5Fj69Wa5",
  "userstatus": "inactive",
  "email": "dvanezis6@earthlink.net"
}, {
  "username": "rpavie7",
  "createdAt": "7/2/2017",
  "updatedAt": "1/18/2017",
  "password": "XsRAeQLMM",
  "userstatus": "inactive",
  "email": "cschimmang7@rakuten.co.jp"
}, {
  "username": "acardozo8",
  "createdAt": "2/10/2017",
  "updatedAt": "4/19/2017",
  "password": "RBqpBOE",
  "userstatus": "active",
  "email": "adelap8@webeden.co.uk"
}, {
  "username": "aseiller9",
  "createdAt": "6/27/2017",
  "updatedAt": "11/4/2017",
  "password": "PInaMRwym36d",
  "userstatus": "active",
  "email": "abodham9@google.com.br"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users',null )
  }
};