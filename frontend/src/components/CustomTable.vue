<template>
    <div class="container-fluid">
        <wj-flex-grid :itemsSource='data'>
          <wj-flex-grid-column binding="country" header="国"></wj-flex-grid-column>
          <wj-flex-grid-column binding="downloads" header="DL数"></wj-flex-grid-column>
          <wj-flex-grid-column binding="sales" header="売上"></wj-flex-grid-column>
          <wj-flex-grid-column binding="expenses" header="費用"></wj-flex-grid-column>
        </wj-flex-grid>
    </div>
</template>

<script>

import "@grapecity/wijmo.styles/wijmo.css";
import '@grapecity/wijmo.vue2.grid';
import '@grapecity/wijmo.vue2.grid.filter';
import * as wjCore from "@grapecity/wijmo";
import { getData } from "../services/data.custom";
import * as gridFilter from '@grapecity/wijmo.grid.filter';

export default {
  data: function() {
    return {
      data: getData()
    };
  },
  created: function() {

  }
}
</script>
<style lang="scss" scoped>

</style>
