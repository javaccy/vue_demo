<template>
  <div>
    <mu-raised-button label="下面弹出" @click="open('bottom')" style="position:fixed;right: 0px;bottom: 0px"/>
    <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
      <mu-appbar title="查询条件">
        <mu-flat-button slot="right" label="添加" color="white" @click="addGroup"/>
        <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
      </mu-appbar>
      <mu-content-block style="border:5px red solid">
        <div v-for="con,i in conditions" :key="i">
          <div style="width: 120px;display: inline-block">
            <mu-select-field v-model="con.attrName" @change="(value) => attrChange(value, con, i)" style="bottom: -11px;" :fullWidth="true">
              <mu-menu-item v-for="item, index in con.attrList" :key="index" :value="item.name" :title="item.title"/>
            </mu-select-field>
          </div>
          <div style="width: 120px;display: inline-block;">
            <mu-select-field v-model="con.attrRelation" @change="(value) => relationChange(value, con, i)" style="bottom:-11px"  :fullWidth="true">
              <mu-menu-item v-for="item, index in con.relations" :key="index" :value="item.key" :title="item.value"/>
            </mu-select-field>
          </div>
          <mu-text-field v-model="con.attrValue" hintText="文本" v-show="con.inputType == 'string' || con.inputType == '' || con.inputType == undefined"/>
          <mu-date-picker v-model="con.attrValue" hintText="日期" v-show="con.inputType === 'dateTime'" container="inline"/>
          <div v-for="item, index in con.attrList" v-if="item.type === 'select'" v-show="con.inputType === 'select'" style="display: inline-block">
            <mu-select-field v-model="con.attrValue" style="bottom:-11px" hintText="选择">
              <mu-menu-item v-for="kv , kvIndex in item.types" :key="kv.key" :value="kv.key" :title="kv.value"/>
            </mu-select-field>
          </div>
          <mu-raised-button @click="addCondition" v-show="con.addButtonState" label="添加"/>
          <mu-raised-button @click="submitConditions" v-show="con.addButtonState" label="提交" primary/>
        </div>
      </mu-content-block>
    </mu-popup>
  </div>
</template>
<script>
  export default {
    components: {},
    name: 'grid-panel',
    data () {
      return {
        bottomPopup: false,
        conditions: [{
          addButtonState: true,
          attrRelation: 'EQ',
          attrName: null,
          attrValue: '',
          relations: [],
          attrList: [],
          inputType: 'string'
        }]

      }
    },
    mounted () {
      let self = this
      this.$eventBus.$on('initGridPanel', function (data) {
        self.conditions[0].relations = data.searchForm.relations
        self.conditions[0].attrList = data.searchForm.attrList
      })
    },
    methods: {
      attrChange (value, con, i) {
        this.conditions[i].attrList.forEach(attr => {
          if (attr.name === value) {
            if (con.inputType !== attr.type) {
              con.attrValue = ''
            }
            con.inputType = attr.type
          }
        })
        con.attrName = value
      },
      relationChange (value, con, i) {
        this.conditions[i].attrRelation = value
      },
      addCondition () {
        if (this.conditions.length <= 5) {
          let result = this.$tools.deepCopy(this.conditions[0])
          result.addButtonState = false
          console.log(JSON.stringify(result))
          this.conditions.push(result)
        }
      },
      submitConditions () {
        let keys = []
        let values = []
        let relations = []
        let kvs = []
        let cons = []
        let c = {}
        this.conditions.forEach(item => {
          if (item.attrName && item.attrValue) {
            keys.push(item.attrName)
            values.push(item.attrValue)
            relations.push(item.attrRelation)
            kvs.push('attrName=' + item.attrName + '&attrValue=' + item.attrValue + '&attrRelation=' + item.attrRelation)
            c['attrName'] = item.attrName
            c['attrValue'] = item.attrName
            c['attrRelation'] = item.attrRelation
            cons.push(c)
          }
        })
        this.$eventBus.$emit('submitGridConditions1', keys.join(',') + '&' + values.join(',') + '&' + relations.join(','))
        this.$eventBus.$emit('submitGridConditions2', kvs.join('&'))
        this.$eventBus.$emit('submitGridConditions3', cons)
        this.$eventBus.$emit('submitGridConditions4', JSON.stringify(cons))
      },
      open (position) {
        this[position + 'Popup'] = true
      },
      close (position) {
        this[position + 'Popup'] = false
      },
      addGroup () {
        console.log('xxxxx')
      }
    }
  }
</script>
<style lang="css">
  .demo-popup-bottom {
    width: 100%;
    max-width: 100%;
  }
</style>

