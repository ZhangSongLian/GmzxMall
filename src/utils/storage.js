const ls = window.localStorage;
const ss = window.sessionStorage;

//对cookie、localStorage、sessionStorage的封装
export const Cookie = {
    get (key) {
        let arr = document.cookie.split('; ')
        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].trim().split('=');
            if (arr2[0] == key) {
                return arr2[1]
            }
        }
        return '';
    },
    set (key, value, day) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                let oDate = new Date()
                oDate.setDate(oDate.getDate() + day)
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate
            }
        } else {
            let oDate = new Date()
            oDate.setDate(oDate.getDate() + day)
            document.cookie = key + '=' + value + ';expires=' + oDate
        }
    },
    remove (key) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            setting.forEach( key => {
                this.set(key, 1, -1)
            })
        }else{
            this.set(key, 1, -1)
        }
        
    }
};
//localStorage使用技巧
//2.单词太长，不方便书写，可以利用 var storage=window.localStorage;
在localStorage中只能以字符串的形式进行保存，所以在存入localStorage之前，我们需要将json格式的数据进行转化成string格式。
//3.字符串和原始类型需要通过JSON.stringfy转字符串，通过JSON.parse转成对象
//4.通过封装方法实现来回转化
export const Local = {
    get(key) {
        if (key) return JSON.parse(ls.getItem(key))
        return null
    },
    set(key, val) {
        const setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                ls.setItem(i, JSON.stringify(setting[i]))
            }
        } else {

        }
    },
    remove(key) {
        ls.removeItem(key)
    },
    clear() {
        ls.clear()
    }
};


export const Session = {
    get(key) {
        if (key) return JSON.parse(ss.getItem(key))
        return null;
    },
    set(key, val) {
        const setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                ss.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ss.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        ss.removeItem(key)
    },
    clear() {
        ss.clear()
    }
}


// web storage和cookie的区别
// web storage 提供了setItem、getItem、removeItem、clear方法，而cookie需要前端开发者自己封装setCookie和getCookie
// cookie的作用是与服务器进行交互，数据始终在同源的http请求中携带，在浏览器和服务器之间来回传递
// 而web Storage仅仅是为了本地存储数据而设计的
