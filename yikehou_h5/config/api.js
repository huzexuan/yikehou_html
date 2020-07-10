import CONFIG from './config.js'
const API = {};
const needLoginApi = CONFIG.needLoginApi
// API.getJson = (route, params) => {
// 	let url = CONFIG.host + CONFIG.url[route];
// 	let user_info = window.sessionStorage.getItem('vuex_user_info') || ''
// 	if (window.sessionStorage.getItem('vuex_user_info') === null) {
// 		user_info = {}
// 	} else {
// 		user_info = JSON.parse(user_info)
// 	}
// 	user_info.token ? params.token = user_info.token : ''
// 	return new Promise((resolve, reject) => {

// 		uni.request({
// 			url: url,
// 			data: params,
// 			dataType: "json",
// 			method: "GET",
// 			success(res) {
// 				resolve(res.data)
// 			},
// 			fail(res) {
// 				console.log(res);
// 			}
// 		});
// 	});
// }
API.postJson = (route, params) => {
	return new Promise((resolve, reject) => {
		let url = CONFIG.host + CONFIG.url[route];

		let user_info = window.sessionStorage.getItem('vuex_user_info')
		if (window.sessionStorage.getItem('vuex_user_info') === null) {
			user_info = {}
		} else {
			user_info = JSON.parse(user_info)
		}

		user_info.token ? params.token = user_info.token : ''

		uni.request({
			url: url,
			data: params,
			dataType: "json",
			method: "POST",
			success(res) {
				resolve(res.data)
			},
			fail(res) {
				console.log(res);
			}
		});
	});
}
export default API;
