// 数组去重
// 方法一:Array.filter() +indexof
export function getFilterArray(arr) {
    return arr.filter((ele,index,self) => {
        return self.indexOf(ele) === index
    })
}
//方法二、把数组的值作为对象的键
export function getFilterArray (arr) {
    let res =[];
    let ob = {};
    for(let i=0;i<arr.length;i++){
        const index = arr[i];
        console.log(index)
        if(!ob[index]){
            res.push(index);
            ob[index]= 1
        }
    }
    return res;
}

//排序

