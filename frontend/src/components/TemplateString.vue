<template>
    <div class="container-fluid">
        <p>下のボタンをクリック</p>
        <button @click="format1" >表示</button>
        <pre id="result1">{{result1}}</pre>
        <hr />
        <button class="btn btn-default" @click="format3" >例1の結果を表示</button>
        <button class="btn btn-danger" @click="format4">結果4</button>
    </div>
</template>

<script>
import { glbz } from '@grapecity/wijmo';

export default {
  data: function() {
    return {
      result1:""
    };
  },
  methods: {
    format1: function() {
      this.result1 = glbz`今日の日付:${new Date()}:d,現在時刻: ${new Date()}:T`;
    },
    format3: function() {
      let msg = wijmo.format('ようこそ{name}さん。あなたのポイント数は{miles:n0}です。',{
        name: 'タロウ',
        miles: 1234
      });
      alert(msg);

    },
    format4: function() {
      let msg = wijmo.format('{name}さんは前回{date:D}に訪問しました',{
        name: 'たろう',
        date: new Date()
      });
      alert(msg);

    }

  }
}
</script>
<style lang="scss" scoped>

</style>
