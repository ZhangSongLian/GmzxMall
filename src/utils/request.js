import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';
import { isObject } from "../utils/utils"


const root = process.env.NODE_ENV == 'production'? "":"https://seo.gmzx.com/admin/user_loginUI"
var instance = axios.create({  //自定义实例默认值
    baseURL: root,
    timeout: 2000,
   // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformRequest:[
        function transformRequest(data,header){
          if(isObject(data)){
            // `headers` 是即将被发送的自定义请求头
            headers["Content-Type"] = "application/json;charset=utf-8";
            return data
          } else {
            let formData = JSON.parse(data);
            let keys = Object.keys(formData);
            headers["Content-Type"] = "application/x-www-form-urlencoded";
                return encodeURI(
                    keys2.map(name => `${name}=${formData[name]}`).join("&")
                );
          }
        }

    ]
  });

  function request(url,data,dataType = "form", type = "post"){
        return new Promise(function(resolve,reject){
          if(dataType = "form"){
              data = JSON.stringify(data);
          }
          instance[type](url,data)
          .then(function(data){  //如果请求成功，获取响应内容
            resolve(data.data)
          }) 
          .catch(function(err){
            Toast('网络开小差啦,请重试！');
            reject(err)
            console.log(err)
          })

        })
  }


export default request

