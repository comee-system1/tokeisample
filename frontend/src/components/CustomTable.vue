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

import { getData } from "../services/data.custom";

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
