<template>
	<view class="content">
		<goods-list :goods="goods" @goDetail="goGoodsDetail"></goods-list>
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
				goods:[]
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			// 获取商品数据
			async getList() {
				const {
					data: res
				} = await this.$http({
					url: '/getHotGoods.json',
				})
				console.log(res)
				this.goods = res.message.goods
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
	.content{
		background: #eee;
	}
</style>
