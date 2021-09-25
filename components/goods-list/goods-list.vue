<template>
	<view class="content">
		<view class="goods_list">
			<view class="goods_item" v-for='(item,key) in goods' 
			:key='key'
			@click="goDetail(item.goods_id)">
				<image :src="item.goods_small_logo" mode=""></image>
				<view class="goods_price">
					<text>￥{{item.goods_price}}</text>
					<text>￥2499</text>
				</view>
				<view class="goods_name">
					<text>{{item.goods_name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default{
		props:['goods'],
		methods:{
			goDetail(id){
				this.$emit('goDetail',id)
			}
		}
	}
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		.goods_list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 15rpx;
		
			.goods_item {
				width: 350rpx;
				background-color: #fff;
				margin: 10rpx 0;
		
				image {
					width: 100%;
					height: 300rpx;
					object-fit: cover;
					margin: 0 auto;
				}
		
				.goods_price {
					color: $shop-color;
					font-size: 36rpx;
		
					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						margin-left: 10rpx;
						text-decoration: line-through;
					}
				}
		
				.goods_name {
					font-size: 30rpx;
					line-height: 50rpx;
					padding: 10rpx 15rpx;
				}
			}
		}
	}
</style>
