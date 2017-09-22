<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img :alt="item.title" :src="item.ali_image">
      </div>
      <h6>{{item.title}}</h6>
      <h3>{{item.sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="(dot,i) in dots" :key="i" @mouseenter="index = i">
            <a href="javascript:;" :class="{active: i === index}">
              <img :src="dot">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <a href="javascript:;" target="_blank">查看详情</a>
        </span>
        <span class="item-blue-btn" v-show='item.direct_to_cart' @click="addSmallCar">加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i>
        <span>{{itemData.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { setShopCarList } from '@/api'

export default {
  props: {
    itemData: Object
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    // 向小购物车添加商品
    addSmallCar() {
      setShopCarList({
        carList: JSON.stringify(this.item)
      }).then((data) => {
        if (data.statusText === 'OK') {
          this.$store.commit('changeSmallCarList', data.data.car_list)
        }
      })
    }
  },
  computed: {
    item() {
      return this.itemData.sku_info[this.index]
    },
    dots() { // 图片切换的dots图片
      let arr = []
      this.itemData.sku_info.forEach((item) => {
        arr.push(`http://img01.smartisanos.cn/${item.spec_json[0].image}20X20.jpg`)
      })
      return arr
    }
  }
}
</script>
