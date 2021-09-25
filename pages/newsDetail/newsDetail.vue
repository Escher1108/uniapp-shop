<template>
	<view class="content">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.public_time}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="newsText">
			<!-- uniapp 跟小程序无法识别h5平台的标签，所以要使用 uniapp官方提供的富文本标签 -->
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		methods: {
			async Detail(){
				const {data:res} = await this.$http({
					url:'/getNewsDetail.json'
				})
				console.log(res)
				this.detail=res.message[0]
			}
		},
		// 在uniapp 中获取路径id 通过onload（options）
		onLoad(options) {
			this.id = options.id
			this.Detail()
		}
	}
</script>

<style lang="scss">
.content{
	display: flex;
	flex-direction: column;
	.title{
		margin: 15rpx 0 15rpx 0;
		text-align: center;
		font-size: 1.2rem;
	}
	.info{
		text-align: center;
		font-size: 10rpx;
		margin: 10rpx;
		text:nth-child(2){
			margin-left: 12rpx;
		}
	}
	
	.newsText{
		margin: 10rpx;
	}
}
</style>
