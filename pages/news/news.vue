<template>
	<view class="news">
		<get-news :news='news' @func="goDetail"></get-news>
	</view>
</template>

<script>
	import getNews from "@/components/news-list/news-list.vue"
	export default {
		components:{
			"get-news":getNews
		},
		data(){
			return {
				news:[]
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews(){
				const {data:res} = await this.$http({
					url:'/getNews.json'
				})
				console.log(res)
				this.news = res.message
			},
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'../newsDetail/newsDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
