<template>
  <section class="container">
    <div>
      <ul class="resultItems">
        <li class="resultItem" v-for="item in results" :key="item.id">
          <img :src="item.Item.mediumImageUrls[0].imageUrl" class="imgStyle">
          <dl class="dataStyle">
            <dt>
              <a :href="item.Item.itemUrl">
                Name: {{ item.Item.itemName.slice(0,20) + "..." }}
              </a>
            </dt>
            <dd class="price">
              ¥{{ item.Item.itemPrice }}
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      results: []
    }
  },
  async asyncData({ app }) {
    const baseUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?'
    const appId = 'applicationId=1056344337549700252'
    const keyword = '&keyword=回' // 回以外認めません
    const getUrl = encodeURI(baseUrl + appId + keyword)
    const response = await app.$axios.$get(getUrl)
    return {
      results: response.Items
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

