import axios from 'axios';
import {CONSTANT} from './constant';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  CONSTANT.methods.loading('open');
  return config;
}, function (error) {
  CONSTANT.methods.loading('close');
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  CONSTANT.methods.loading('close');
  return response;
}, function (error) {
  CONSTANT.methods.loading('close');
  return Promise.reject(error);
});

//  登录接口
export function _loginIn (user) {
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.LOGIN,
      data: {
        params: user
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
//  退出登录
export function _logout () {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.LOGOUT,
      data: {
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}

//  获取个人信息
export function _getUserInfo () {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETPERSONALINFO,
      data: {
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
//  修改个人信息
export function _updateUserInfo (user) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATEPERSONALINFO,
      data: {
        params: {
          email: user.email
        }
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
//  获取七牛上传uptoken
export function _getQiniuUptoken () {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETQINIUTOKEN,
      data: {
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 新增轮播图
export function _addSlideshow (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ADDSLIDESHOW,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取轮播图list
export function _getSlideShowList (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETSLIDESHOWLIST,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 根据id获取轮播图信息
export function _getSlideShow (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETSLIDESHOW,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 修改轮播图
export function _updateSlideshow (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATESLIDESHOW,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 删除轮播图
export function _deleteSlideshow (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DELETESLIDESHOW,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取首页公司简介信息
export function _getCompanyProfile () {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETCOMPANYPROFILE,
      data: {
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 编辑首页公司简介信息
export function _updateCompanyProfile (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATECOMPANYPROFILE,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取首页信息
export function _getHomePage () {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETHOMEPAGE,
      data: {
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取用户列表
export function _getUserList (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETUSERLIST,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 新增用户
export function _addUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ADDUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取用户详情
export function _getUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 编辑用户
export function _updateUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATEUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 禁用用户
export function _disableUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DISABLEUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 启用用户
export function _enableUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ENABLEUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
export function _deleteUser (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DELETEUSER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 获取客户一览
export function _getCustomerList (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETCUSTOMERLIST,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 新增客户
export function _addCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ADDCUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 查看客户详情
export function _getCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETCUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 编辑客户详情
export function _updateCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATECUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 禁用客户详情
export function _disableCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DISABLECUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 启用客户详情
export function _enableCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ENABLECUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
// 删除客户详情
export function _deleteCustomer (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DELETECUSTOMER,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}

//  获取导航菜单
export function _getMenu () {

  return new Promise(function (resolve, reject) {
    axios({
      method: 'get',
      url: '/static',
      data: {

      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}

//  获取微信openid
export function _test () {


  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: '/portal/enterprise/editWholeGroup',
      data: {

        "enterpriseId":235604,
        "forbidTalkUserNumbers":[66252576,66570070,66580691,66618105],
        "isIncludeHidden":1,
        "isIncludeViewself":0

      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}
export function _testJava () {


  return new Promise(function (resolve, reject) {
    axios({
      method: 'get',
      url: '/getHomePage',
      data: {

      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });

}

//修改密码，直接修改密码的那种
export function _xiugaimima (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }

  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.XIUGAIMIMA,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//忘记密码发送邮件
export function _forgetPassword (user) {

  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.SENDEMAIL,
      data: {
        params: user
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//发送重置忘记密码中的重置密码
//忘记密码重置的时候一进来就获取一个参数
export function _getAparamsToSend (user) {

  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.SECDEMAILSECOND,
      data: {
        action:"baite/web/authResetMail",
        params: user
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

// 点击发送按钮
export function _changePassword (user) {
  var jwtToken = sessionStorage.getItem('jwtToken');
  if(!jwtToken){
    location.href = location.origin + '/#/ForgetPassword'
  }

  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.CHANGEPASSWORD,
      data: {
        action:"baite/web/resetpwd",
        params: user
      },
      headers: {
        'Authorization': jwtToken,
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}


//订单一览的列表页
export function _GetDingdanList (params){
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GETDINGDANLIST,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//添加订单一览
export function _addDingdanForm (params){
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.ADDORDER,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//删除订单一览中列表
export function _deletedingdan (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.DELETEORDER,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//审核订单
export function _checkdingdan (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.CHECHORDER,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//退回订单
export function _returndingdan (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.RETURNORDER,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//更改价格
export function _changePrice (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.CHANGEPRICE,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}


//订单查看获取订单信息
export function _getDingdanInfo (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.GRTORDERINFO,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//编辑订单中的更新订单状态
export function _getdingdanStatus (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATESTATE,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//编辑订单中的更新订单基本信息
export function _UpdataBasicInfo (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATEBASICINFO,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//编辑订单中的更新加工信息的基本信息
export function _UpdataListInfo (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.UPDATELISTINFO,
      data: {
        params: params
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

// 获取结算一览
export function _Getbalancelist (params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Getbalancelist,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}
//获取价格一览 
export function _Getpricelist(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Getpricelist,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//添加价格 _addPrice
export function _addPrice(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Addprice,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//删除价格
export function _Deleteprice(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Deleteprice,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//获取价格设定信息
export function _Getprice(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Getprice,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//更新价格
export function _Updateprice(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Updateprice,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//更新价格
export function _Addpricebatch(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Addpricebatch,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//生成结算单
export function _Addbalance(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Addbalance,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//结算 完成
export function _Finishbalance(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Finishbalance,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}

//结算 下载pdf
export function _Downloadbalance(params) {
  var jwtToken = sessionStorage.getItem('jwtToken');

  if (!jwtToken) {
    location.href = location.origin + '/#/login'
  }
  return new Promise(function (resolve, reject) {
    axios({
      method: 'post',
      url: CONSTANT.api.Downloadbalance,
      data: {
        params: params
      },
      headers: {
        'Authorization': jwtToken
      },
      responseType:'blob'
    }).then(function (response) {
      resolve(response);
    }).catch(function (response) {
      reject(response);
    })
  });
}