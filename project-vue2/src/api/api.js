import service from "@/utils/service";
import qs from "qs"
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    });
}
//查询列表
export function Student(params) {
    return service({
        method: 'GET',
        url: '/students',
        params
    })
}
//删除
export function DelStudent(id) {
    return service({
        method: 'DELETE',
        url: `/students/${id}`
    })
}
//查询信息
export function getInfo() {
    return service({
        method: 'GET',
        url: `/info`,
    })
}
//新增信息
export function addInfo(data, method) {
    data = qs.stringify(data);
    return service({
        method: method,
        url: `/info`,
        data
    })
}
//删除信息
export function DelInfo(id) {
    return service({
        method: 'DELETE',
        url: `/info/${id}`
    })
}