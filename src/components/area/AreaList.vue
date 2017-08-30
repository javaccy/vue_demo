<template>
  <div>
    <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
              :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
              :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="ID">ID</mu-th>
          <mu-th tooltip="编码">编码</mu-th>
          <mu-th tooltip="名称">名称</mu-th>
          <mu-th tooltip="全名">全名</mu-th>
          <mu-th tooltip="邮编">邮编</mu-th>
          <mu-th tooltip="城市代码">城市代码</mu-th>
          <mu-th tooltip="级别">级别</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="item,index in data" :key="index" :selected="item.selected">
          <mu-td>{{index + 1}}</mu-td>
          <mu-td>{{item.id}}</mu-td>
          <mu-td>{{item.name}}</mu-td>
          <mu-td>{{item.mergerName}}</mu-td>
          <mu-td>{{item.zipCode}}</mu-td>
          <mu-td>{{item.cityCode}}</mu-td>
          <mu-td>{{item.levelType}}</mu-td>
        </mu-tr>
      </mu-tbody>
      <mu-tfoot slot="footer">
        <grid-condition-panel></grid-condition-panel>
        <mu-pagination :total="total" :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption"
                       @pageSizeChange="pageSizeChange" @pageChange="pageChange">
        </mu-pagination>
      </mu-tfoot>
    </mu-table>
  </div>
</template>

<script>
  import GridConditionPanel from '../GridConditionPanel.vue'

  export default {
    components: {GridConditionPanel},
    name: 'AreaList',
    data () {
      return {
        total: 1,
        current: 1,
        pageSize: 20,
        showSizeChanger: true,
        pageSizeOption: [10, 20, 30, 40],

        data: [],
        fixedHeader: true,
        fixedFooter: true,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        showCheckbox: true,
        height: '800px'
      }
    },
    mounted () {
      this.getPage(1)
    },
    methods: {
      getPage (index) {
        let self = this
        this.axios.post(this.$cfg.api_url + '/area/list?page=' + index + '&pageSize=' + this.pageSize).then((res) => {
          self.pageSize = res.data.page.pageSize
          self.current = res.data.page.page
          self.total = res.data.page.count
          self.data = res.data.page.records
          self.$eventBus.$emit('xxx', res.data)
        })
      },
      getParams (page) {
        return `page=`
      },
      pageSizeChange (pageSize) {
        this.pageSize = pageSize
        this.getPage(this.current)
      },
      pageChange (index) {
        this.getPage(index)
      }
    }

  }
</script>

<style lang="css">
  .demo-table-settings {
    width: 200px;
    overflow: hidden;
    margin: 20px auto 0px;
  }

  .demo-popup-bottom {
    width: 100%;
    max-width: 975px;
  }
</style>
