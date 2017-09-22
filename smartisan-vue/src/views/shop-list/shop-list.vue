<template>
  <div>
    <header-nav></header-nav>
    <div id="main">
      <div class="sku-box store-content">
        <div class="sort-option">
          <ul class="line clear">
            <li>
              <a href="javascript:;" class="active">综合排序</a>
            </li>
            <li>
              <a href="javascript:;" class="">销量排序</a>
            </li>
            <li>
              <a href="javascript:;" class="">价格低到高</a>
            </li>
            <li>
              <a href="javascript:;" class="">价格高到低</a>
            </li>
          </ul>
        </div>
        <div class="gray-box">
          <div class="item-box">
            <shop-item :itemData='item' v-for="(item,index) in shopList" :key="index"></shop-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/header-nav/header-nav'
import ShopItem from './shop-item'
import { getShopList } from '@/api'

export default {
  data() {
    return {
      shopList: []
    }
  },
  created() {
    this._getShopList()
  },
  methods: {
    _getShopList() {
      getShopList().then((data) => {
        this.shopList = data.data.list
      })
    }
  },
  components: {
    HeaderNav,
    ShopItem
  }
}
</script>