<template>
    <div class="container-fluid">
      <button class="btn btn-default" @click="animate">グリットを反転する</button>
      
      <wj-flex-grid ref="flexGrid" :itemsSource="data" :initialized='initialized'>
        <wj-flex-grid-column binding="id" header="ID"></wj-flex-grid-column>
        <wj-flex-grid-column binding="country" header="国"></wj-flex-grid-column>
        <wj-flex-grid-column binding="download" header="DL数"></wj-flex-grid-column>
        <wj-flex-grid-column binding="sales" header="売上" ></wj-flex-grid-column>
        <wj-flex-grid-column binding="expenses" header="費用"></wj-flex-grid-column>
      </wj-flex-grid>
      
    </div>
</template>

<script>

import * as grid from '@grapecity/wijmo.grid';
import '@grapecity/wijmo.vue2.grid';

import {getData} from '../services/data.anime';

export default {
  data: function() {
    return {
      data: getData()
    };
  },
  methods: {
    animate: function() {
      wijmo.animate((pct)=>{
        let xform = "";
        if(pct < 1) {
          if(pct > 0.5) pct = pct -1;
          xform = 'rotateY( ' + (pct * 360) + 'deg)';
        }
        this.control.hostElement.style.transform = xform;
      },1000);
    },
    initialized: function(control){
      this.control = control;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
