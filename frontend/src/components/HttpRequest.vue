<template>
    <div class="container-fluid">
        <wj-flex-grid v-if="data" :isReadOnly="true" :itemsSource="data">
            <wj-flex-grid-column :binding="'CategoryID'" header="分類ID" :width=80></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'CategoryName'" header="分類名"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'Description'" header="説明" :width="'*'"></wj-flex-grid-column>
        </wj-flex-grid>
    </div>
</template>

<script>
import "@grapecity/wijmo.styles/wijmo.css";
import "@grapecity/wijmo.vue2.grid";
import * as wijmo from "@grapecity/wijmo";

export default {
  name: 'HttpRrequest',
  data: function() {
    return {
      data: []
    }
  },
  created: function() {
    wijmo.httpRequest(
      "https://services.odata.org/Northwind/Northwind.svc/Categories",
      {
        data: {
          $format: 'json',
          $select: 'CategoryID,CategoryName,Description'
        },
        success: xhr => {
          this.data = JSON.parse(xhr.responseText).value;
        }
      }
    );
  }
}
</script>

<style lang="scss" scoped>
  .container-fluid,
  .wj-flexgrid {
    max-height: 200px;
  }
</style>
