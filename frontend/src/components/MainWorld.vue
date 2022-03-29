<template>
    <div class="container-fluid">
        <div class="form-group">
            <label for="theAutoComplete">AutoComplete:</label>
            <wj-auto-complete id="theAutoComplete" display-member-path="country" :items-source="data">
            </wj-auto-complete>
        </div>
        <div class="form-group">
            <label for="theCombo">ComboBox:</label>
            <wj-combo-box id="theCombo" display-member-path="country" :items-source="data">
            </wj-combo-box>
        </div>
    </div>
</template>

<script>

import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.vue2.core';
import '@grapecity/wijmo.vue2.input';
import { getData } from '@/assets/data/data';

export default {
  data: function () {
    return {
      data: getData()
    }
  }
}
</script>