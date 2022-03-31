<template>
    <div class="container-fluid">
      <button id="undo" class="btn btn-primary" :disabled="!canUndo" @click="undoStack.undo()">
      <span class="arrow">&#x21B6;</span> 元に戻す (Ctrl+Z)
      </button>
      <button id="Redo" class="btn btn-success" :disabled="!canRedo" @click="undoStack.redo()">
      やり直し
      </button>
      <button class="btn" disabled>
      アクション回数: {{actionCount}}
      </button>
      <button id="clear" class="btn btn-default" :disabled="!actionCount" @click="undoStack.clear()">
      リセット
      </button>
      <form id="undoable-form">
        <div class="col-md-5">
          <h3>HTML入力要素</h3>
          <div class="form-group">
            <label for="firstName">名字</label>
            <input id="firstName" class="form-control" placeholder="名字">
          </div>
          <div class="form-group">
            <label for="lastName">名前</label>
            <input id="lastName" class="form-control" placeholder="名前" />
          </div>
          <div class="form-group">
            <label for="select">選択</label>
            <select id="select" class="form-control">
              <option value="value1">リンゴ</option>
              <option value="value2" selected>オレンジ</option>
              <option value="value3">ブドウ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="area">複数行テキスト</label>
            <textarea id="area" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1" checked> 赤
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2" > 緑
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="option3" > 青
            </label>
          </div>
          <div class="form-group label-indent">
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> 暖かい
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" > つめたい
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" >常温
            </label>
          </div>
        </div>
        <div class="col-md-7">
          <div class="col-md-12">
            <h3>wijmoコントロール</h3>
            <div class="form-group">
              <label for="country">国</label>
              <wj-combo-box id="country"  placeholder="国"
                :itemsSource="countries"
                :isRequried="false"
                :selectedIndex="-1"/>
            </div>
            <div class="form-group">
              <label for="amount">金額</label>
              <wj-input-number id="amount" placeholder="金額"
                :format="'c2'"
                :min="0"
                :step="10"
                :isRequired="false"
                :value="null"/>
            </div>
            <div class="form-group">
              <label for="date">日付</label>
              <wj-input-date id="date" placeholder="日付"
                :isRequired="false"
                :value="null"/>
            </div>
            <div class="form-group">
              <label for="color" title="ComboBox">コンボボックス</label>
              <wj-combo-box id="color"
                :itemsSource="colors"
                :isRequired="false"
                :selectedIndex="-1"/>
            </div>
            <div class="form-group">
              <label for="ac" title="AutoComplete">オートコンプリート</label>
              <wj-auto-complete id="ac"
                :itemsSource="colors"
                :selectedIndex="-1" />
            </div>
            <div class="form-group">
              <label for="colors" title="MultiSelect" >複数選択</label>
              <wj-multi-select id="colors"
                :itemsSource="colors" />
            </div>
            <div class="form-group">
              <label for="mac" title="MultiAutoComplete">タグ入力</label>
              <wj-multi-auto-complete id="mac"
                :itemsSource="colors"
                :selectedIndex="-1"/>
            </div>
            <div class="form-group">
              <label for="grid">グリッド</label>
              <wj-flex-grid div id="grid"
                :anchorCursor="true"
                :frozenColumns="2"
                :allowAddNew="true"
                :allowDelete="true"
                :itemsSource="data"
                :initialized="initGrid" >
                <wj-flex-grid-column binding="id" header="ID"></wj-flex-grid-column>
                <wj-flex-grid-column binding="name" header="名前"></wj-flex-grid-column>
                <wj-flex-grid-column binding="country" header="国"></wj-flex-grid-column>
                <wj-flex-grid-column binding="active" header="有効"></wj-flex-grid-column>
                <wj-flex-grid-column binding="downloads" header="DL数"></wj-flex-grid-column>
                <wj-flex-grid-column binding="sales" header="売上"></wj-flex-grid-column>
              </wj-flex-grid>
              <button id="add-row" class="btn btn-primary"
                  @click="addRow($event)">
                  コードで行を追加
              </button>

            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import '@grapecity/wijmo.styles/wijmo.css';

import '@grapecity/wijmo.vue2.input';
import '@grapecity/wijmo.vue2.gauge';
import '@grapecity/wijmo.vue2.grid';
import '@grapecity/wijmo.vue2.core';
import { UndoStack } from '@grapecity/wijmo.undo';
import { CellRangeEventArgs } from '@grapecity/wijmo.grid';

export default {
  data: function() {
    return {
      undoStack: null,
      canUndo: false,
      canRedo: false,
      actionCount: 0,
      countries: this.getCountries(),
      colors: this.getColors(),
      data:this.getData(),
      names: this.getNames(),
      grid: null
    };
  },
  mounted() {
    this.undoStack = new UndoStack('#undoable-form',{
      maxActions: 50,
      stateChanged: s => {
        this.canUndo = s.canUndo;
        this.canRedo = s.canRedo;
        this.actionCount = s.actionCount;
      }
    });
  },
  methods: {
    initGrid(s) {

        // save reference to the grid
        this.grid = s;

        // add data maps to some columns
        let col = s.getColumn('name');
        col.dataMap = this.names;
        col.dataMap.isEditable = true;
        col = s.getColumn('country');
        col.dataMap = this.countries;
    },

    addRow(e) {
      let g = this.grid;
      let view = g.editableCollectionView;
      let newItem = view.addNew();
      g.focus();
      newItem.id = -1;
      newItem.name = '新しい項目';
      newItem.active = true;
      g.onRowAdded(new CellRangeEventArgs(g.cells, g.selection)); // create undoable action
      view.commitNew();
      e.preventDefault(); // don't submit the form
    },
    getCountries() {
      let arrayCountries = ['アメリカ', 'ドイツ', 'イギリス', '日本', 'イタリア', 'ギリシア' ]
      return arrayCountries;
    },
    getColors() {
      let arrayColors = ['black', '白iro', 'red', 'green', 'blue' ];
      return arrayColors;
    },
    getNames() {
      let names = ['成宮 真紀', '山本 雅治', '加藤 泰江', '川村 匡'];
      return names;
    },
    getData() {
      let countries = this.getCountries();
      let names = this.getNames();
      let data = [];
      for (let i = 0; i < 50; i++) {
        data.push({
          id: i,
          name: names[i % names.length],
          country: countries[i % countries.length],
          active: i % 5 != 0,
          downloads: Math.round(Math.random() * 20000),
          sales: Math.round(Math.random() * 200000)
        });
      }
      return data;
    }
  }
}
</script>
<style>
.wj-flexgrid {
    max-height: 250px;
    max-width: 800px;
    margin: 10px 0;
}
body {
    margin-bottom: 20px;
}

/* style frozen cells */
#sample-grid .wj-cell.wj-frozen:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected),
#sample-grid .wj-cell.wj-frozen.wj-alt:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected) {
    background: rgb(255,255,125);
}
</style>