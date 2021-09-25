<template>
	<view class="content">
		<image src="https://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view class="phone" @click="callPhone">联系电话：177****6003 （点击拨打）</view>
			<view class="address">联系地址：贵州省贵阳市</view>
		</view>
		<map class="maps" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				title:'龙宇苑',
				latitude: 26.6048239,
				longitude: 106.623616,
				covers: [{
					latitude: 26.6048239,
					longitude: 106.623616,
					iconPath: '../../static/icon/地球.png',
					width:30,
					height:30,
					clickable:true
				}],
				
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'17768496003'
				})
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		.content {

			image {
				width: 100%;
				height: 300rpx;
				object-fit: cover;
			}

			.info {
				width: 100%;
				margin: 10rpx 5rpx 0 5rpx;
				font-size: 30rpx;
				line-height: 60rpx;

				view {
					border-bottom: 1rpx solid #eee;
				}

				.phone {
					padding: 15rpx;
				}

				.address {
					padding: 15rpx;
				}


			}

			.maps {
				width: 750rpx;
				height: 750rpx;
			}
		}
	}
</style>
