import $http from './http.js'
 export const get_label = (data) => {
 	return $http({
 		url: 'get_label',
 		data
 	})
 }
 export const get_list = (data) => {
 	return $http({
 		url: 'get_list',
 		data
 	})
 }
 export const update_like = (data) => {
 	return $http({
 		url: 'update_like',
 		data
 	})
 }
 export const get_search = (data) => {
 	return $http({
 		url: 'get_search',
 		data
 	})
 }

 export const update_label = (data) => {
 	return $http({
 		url: 'update_label',
 		data
 	})
 }

 export const get_detail = (data) => {
 	return $http({
 		url: 'get_detail',
 		data
 	})
 }
 export const update_coments = (data) => {
 	return $http({
 		url: 'update_coments',
 		data
 	})
 }

 export const get_comments = (data) => {
 	return $http({
 		url: 'get_comments',
 		data
 	})
 }
 export const updata_author = (data) => {
 	return $http({
 		url: 'updata_author',
 		data
 	})
 }
 export const update_thumbup = (data) => {
 	return $http({
 		url: 'update_thumbup',
 		data
 	})
 }
