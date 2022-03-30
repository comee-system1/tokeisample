<template>
    <div class="container-fluid">
      <p>
        <wj-menu
          :value="selectedValue" 
          :header="'カルチャー'" 
          :itemClicked="cultureChanged"
        >
        <wj-menu-item :value="'en'">English(US)</wj-menu-item>
        <wj-menu-item :value="'en-GB'">English(UK)</wj-menu-item>
        <wj-menu-item :value="'es'">Spanish</wj-menu-item>
        <wj-menu-item :value="'ja'">Japanese</wj-menu-item>
        <wj-menu-item :value="'ko'">Korean</wj-menu-item>
        </wj-menu>
      </p>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">日時</h4>
        </div>
        <div class="panel-body">
          <table class="table table-condensed">
            <thead>
              <th>書式</th>
              <th>説明</th>
              <th>結果</th>
            </thead>
            <tbody >
              <tr v-for="item of dataSamples" :key="item.id">
                <td>{{ item.format }}</td>
                <td>{{ item.description }}</td>
                <td>{{ formatDate(item.format) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data: function() {
    return {
      dataSamples: [
        {format:'d', description: '短い日付パターン'},
        {format:'D', description: '長い日付パターン'},
        {format:'f', description: '完全な短い日付パターン'},
        {format:'F', description: '完全な長い日付パターン'},
        {format:'t', description: '短い時刻パターン'},
      ],
      selectedValue: ''
    };
  },
  methods: {
   formatDate(format) {
     return wijmo.Globalize.format(new Date(), format);
   },
   loadCulture(culture){
      let url = `node_modules/@grapecity/wijmo.cultures/wijmo.culture.${culture}.js`;
      let scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++ ) {
        let script = scripts[i];

        if (script.src.indexOf('/culture/wijmo.culture.') > -1) {
          script.parentElement.removeChild(script);
          break;
        }
      }
      let script = document.createElement('script');
      script.onload = () => {
        this.$forceUpdate();
        wijmo.Control.invalidateAll();
      };
      script.src = url;
      document.head.appendChild(script);
   },
   cultureChanged(sender) {
     if(sender.selectedValue){
       this.selectedValue = sender.selectedValue;
       this.loadCulture(sender.selectedValue);
     }
   }
  }
}
</script>
<style lang="scss" scoped>

</style>
