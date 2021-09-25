<template>
	<view class="content">
		<view class="news_item" v-for="item in news" :key="item.id"
		@click="navDetail(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit" >
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.public_time}}</text>
					<text>浏览人数：{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['news'],
		// 年月日过滤器
		// filters:{
		// 	formatDate(date){
		// 		const nDate = new Date(date)
		// 		const year = nDate.getFullYear()
		// 		const month = nDate.getMonth().toString().padStart(2,0)
		// 		const day = nDate.getDay().toString().padStart(2,0)
		// 		return year+'-'+month+'-'+day
		// 	}
		// }
		methods:{
			navDetail(id){
				this.$emit('func',id)
			}
		}
	}
</script>

<style lang="scss">
.news{
	box-sizing: border-box;
	
	.news_item{
		display: flex;
		position: relative;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid $shop-color;
		image{
			height: 130rpx;
			min-width: 200rpx;
			max-width: 200rpx;
		}
		
		.right{
			display: flex;
			flex-wrap: wrap;
			margin-left: 15rpx;;
			.tit{
				font-size: 30rpx;
				font-weight: 500;
				letter-spacing: 2rpx;
			}
			.info{
				position: absolute;
				bottom: 10rpx;
				margin-top: 10rpx;
				font-size: 20rpx;
				text:nth-child(2){
					margin-left: 20rpx;
				}
			}
		}
	}
}
</style>

