import { format } from "path";

export function isObject(val){
    return val != null && typeof val === "object" && Array.isArray(val) === false
}

// 格式化手机号码
export function formatPhone(phone){
    return (''+phone).substr(0,3) + "*****" + (''+phone).substr(7)
}