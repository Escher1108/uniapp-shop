<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" 
			:key="index"
			@click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
		<goods-list :goods="shopList" @goDetail="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '@/components/goods-list/goods-list.vue'
	export default {
		components:{
			"goods-list":goodsList
		},
		data() {
			return {
				swipers: [],
				shopList: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/picture/picture'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/video/video'
					}
				]
			}
		},
		onLoad() {
			this.getSwiper()
			this.getList()
		},
		methods: {
			// 获取轮播图
			async getSwiper() {
				console.log('获取轮播图')
				const {
					data: res
				} = await this.$http({
					url: '/getlunbo.json',
				})
				console.log(res)
				this.swipers = res.message
			},

			// 获取商品数据
			async getList() {
				const {
					data: res
				} = await this.$http({
					url: '/getHotGoods.json',
				})
				console.log(res.message.goods)
				this.shopList = res.message.goods
			},
			// 导航栏点击事件
			navItemClick(url) {
				console.log(url);
				uni.navigateTo({
					url
				})
			},
			// 跳转到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;

		.content {

			swiper {
				width: 100vw;
				height: 380rpx;

				image {
					height: 100%;
					width: 100%;
				}
			}

			.nav {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: row;

				.nav_item {
					text-align: center;

					view {
						width: 120rpx;
						height: 120rpx;
						background: #b50e03;
						border-radius: 60rpx;
						margin: 12rpx auto;
						line-height: 120rpx;
						color: #fff;
						font-size: 40rpx;
					}

					text {
						font-size: 30rpx;
					}
				}
			}

			.hot_goods {
				background: #eee;
				overflow: hidden;
				margin-top: 10rpx;

				.tit {
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					color: $shop-color;
					text-align: center;
					margin: 8rpx auto;
					letter-spacing: 20rpx;
					background-color: #FFFFFF;
					font-weight: 500;
					font-size: 40rpx;
				}
			}
		}
	}
</style>
