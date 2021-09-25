// const BASE_URL ='https://api-hmugo-web.itheima.net/api/public/v1'
const BASE_URL = 'http://localhost:8080/static/api'
export const Myrequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'get',
			header:options.header || {'Cache-Control':'no-cach'},
			data:options.data || {},
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:"请求数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}