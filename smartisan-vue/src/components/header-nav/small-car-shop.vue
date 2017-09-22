<template>
  <div class="nav-cart-wrapper">
    <div class="nav-cart-list">
      <div class="empty" v-show="!smallCarList.length">
        <h3>购物车为空</h3>
        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
      </div>
      <div class="full">
        <div class="nav-cart-items">
          <ul>
            <li class="clear">
              <div class="cart-item js-cart-item cart-item-sell" v-for="(item,index) in smallCarList" :key="index">
                <div class="cart-item-inner">
                  <div class="item-thumb">
                    <img :src="item.ali_image">
                  </div>
                  <div class="item-desc">
                    <div class="cart-cell">
                      <h4>
                        <a href="#/item/100027401">{{item.title}}</a>
                      </h4>
                      <p class="attrs">
                        <span>{{item.spec_json[0].show_name}}</span>
                      </p>
                      <h6>
                        <span class="price-icon">¥</span>
                        <span class="price-num">{{item.price}}</span>
                        <span class="item-num">x {{item.sku_num}}</span>
                      </h6>
                    </div>
                  </div>
                  <div class="del-btn" @click="removeCarShop(item.sku_id)">删除</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-cart-total">
          <p>共
            <strong class="ng-binding">{{smallCarNum}}</strong> 件商品</p>
          <h5>合计：
            <span class="price-icon">¥</span>
            <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{smallCarPrice}}</span>
          </h5>
          <h6>
            <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShopCarList, removeCarShopById } from '@/api'

export default {
  data() {
    return {

    }
  },
  created() {
    this._getShopCarList()
  },
  methods: {
    removeCarShop(id) {
      removeCarShopById(
        {
          removeId: id
        }
      ).then((data) => {
        this.$store.commit('changeSmallCarList', data.data.car_list)
      })
    },
    _getShopCarList() {
      getShopCarList().then((data) => {
        this.$store.commit('changeSmallCarList', data.data.car_list)
      })
    }
  },
  computed: {
    smallCarList() {
      return this.$store.state.smallCarList
    },
    smallCarNum() {
      return this.$store.getters.smallCarNum
    },
    smallCarPrice() {
      return this.$store.getters.smallCarPrice
    }
  }
}
</script>
