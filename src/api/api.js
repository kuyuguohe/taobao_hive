import request from "@/api/request";

export function getSale(){
    return request({
        url: '/get/sale',
        method:'GET'
    });
}

export function getConsume(){
    return request({
        url:'/get/consume',
        method:'GET'
    })
}

export function getGender(){
    return request({
        url:'/get/gender',
        method:'GET'
    })
}

export function getAge(){
    return request({
        url:'/get/age',
        method:'GET'
    })
}

export function getsvm(){
    return request({
        url:'/get/svm',
        method:'GET'
    })
}