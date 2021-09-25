<template>
	<view class="pics">
		<!-- 左侧 -->
		<scroll-view scroll-y="true" class="left">
			<view class="list-left" 
			:class="active===index?'active':''" v-for="(item,index) in categories" 
			:key="item.id"
			@click="leftCilckHandle(index)">{{item.cat_name}}</view>
		</scroll-view>
		<!-- 右侧 -->
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item,index) in secondData" :key="item.id">
				<image @click="previewImg(item.img)" :src="item.img" mode=""></image>
				<text>{{item.title}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories:[],
				active:0,
				secondData:[]
			}
		},
		onLoad() {
			this.getCategories()
			this.leftCilckHandle(1)
		},
		methods: {
			// 获取商品分类
			async getCategories(){
				const {data:res} = await this.$http({
					url:'/getImgCategory.json'
				})
				// console.log(res)
				this.categories = res.message
			},
			async leftCilckHandle(index){
				this.active = index;
				const {data:res} = await this.$http({
					url:'/getDateByCategory.json'
				})
				// console.log(res)
				this.secondData = res.message
			},
			// 图片预览
			previewImg(current ){
				const urls = this.secondData.map(item=>{
					return item.img
				})
				uni.previewImage({
					urls,current 
				})
			}
		}
	}
</script>

<style lang="scss">
	.pics {
		height: 100vh;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;

			.list-left {
				width: 190rpx;
				height: 60rpx;
				line-height: 60rpx;
				border: 1rpx solid #eee;
				margin: 5rpx 0 5rpx 0;
				padding: 15rpx 10rpx;
				text-align: center;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
		
		.right{
			width: 550rpx;
			height: 100%;
			margin: 5rpx auto;
			
			.item{
				image{
					width: 530rpx;
					height: 520rpx;
					border-radius: 5rpx;
					object-fit: cover;
					padding-left: 10rpx;
				}
			}
		}
	}
</style>
