<template>
  <div class="container-fluid">
    <div class="menubar">
      <wj-menu id="fileMenu" 
        :header="'ファイル'" 
        :displayMemberPath="'header'" 
        :subItemsPath="'items'" 
        :showDropDownButton="false"
        :itemsSource="menuTree.fileMenu"
        :openOnHover="openOnHover" 
        :isAnimated="isAnimated"
        :itemClicked="menuItemClicked" 
        :initialized="initMenu">
      </wj-menu>
      <wj-menu id="editMenu"
        :header="'編集'"
        :displayMemberPath="'header'"
        :subItemsPath="'items'"
        :showDropDownButton="false"
        :itemsSource="menuTree.editMenu"
        :openOnHover="openOnHover"
        :isAnimated="isAnimated"
        :itemClicked="menuItemClicked"
        :initialized="initMenu">
      </wj-menu>
      <wj-menu id="formatMenu" 
        :header="'書式'"
        :displayMemberPath="'header'"
        :subItemsPath="'items'"
        :showDropDownButton="false"
        :openOnHover="openOnHover"
        :isAnimated="isAnimated"
        :itemsSource="menuTree.formatMenu"
        :initialized="initMenu"
         >
      </wj-menu>
    </div>

    <p id="menuTarget" ref="menuTarget">
        階層メニュー
    </p>

  </div>
</template>

<script>
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.vue2.core';
import '@grapecity/wijmo.vue2.input';
import '@grapecity/wijmo.vue2.chart';
import '@grapecity/wijmo.vue2.grid';
import { getMenuTree } from '../services/data.menu';

export default {
  data: function() {
    return {
      openOnHover: true,
      isAnimated: true,
      menuTree: getMenuTree(),
      fileMenu: {},
      editMenu: {},
      formatMenu: {},
      menuTarget: {}
    };
  },
  methods: {
    initMenu(menu){
      this[menu.hostElement.id] = menu;
    },
    menuItemClicked(menu) {
      this.menuTarget.innerHTML = `<b><i>${menu.text}</i></b>がクリックされました。`;
    },
    formatMenuCommand(param) {
        let that = this;
        return {
            executeCommand: function(param){
                let ts = that.menuTarget.style;
                let cssStyle = window.getComputedStyle(that.menuTarget, null);

                switch (param.prop) {
                    case 'face':
                        ts.fontFamily = param.header;
                        break;
                    case 'font':
                        switch (param.header) {
                            case '太字':
                                ts.fontWeight = ts.fontWeight ? '' : 'bold';
                                break;
                            case '斜体':
                                ts.fontStyle = ts.fontStyle ? '' : 'italic';
                                break;
                            case '下線':
                                ts.textDecoration = ts.textDecoration ? '' : 'underline';
                                break;
                            case '大きいサイズ':
                                ts.fontSize = (parseFloat(cssStyle.fontSize) * 1.2) + 'px';
                                break;
                            case '小さいサイズ':
                                ts.fontSize = (parseFloat(cssStyle.fontSize) * .8) + 'px';
                                break;
                        }
                        break;
                    case 'color':
                        ts.color = param.header.toLowerCase();
                        break;
                    case 'background':
                        ts.background = param.header.toLowerCase();
                        break;
                }
            },
            canExecuteCommand: function(param){
                let ts = that.menuTarget.style;
                let cssStyle = window.getComputedStyle(that.menuTarget, null);

                switch (param.prop) {
                    case 'face':
                        return ts.fontFamily != param.header;
                    case 'font':
                        switch (param.header) {
                            case '大きいサイズ':
                                return parseFloat(cssStyle.fontSize) < 24;
                            case '小さいサイズ':
                                return parseFloat(cssStyle.fontSize) > 8;
                        }
                        break;
                    case 'color':
                    case 'background':
                        let color = param.header.toLowerCase();
                        return ts.color != color && ts.backgroundColor != color;
                }
                return true;
            }
        }
    },
    rtlChanged(e) {
        let menubar = document.querySelector('.menubar');
        menubar.setAttribute('dir', e.target.checked ? 'rtl' : 'ltr');
        wijmo.Control.refreshAll(menubar);
    }
  },
  mounted() {
    this.formatMenu.command = this.formatMenuCommand();
    //$refsは子要素を表す
    this.menuTarget = this.$refs.menuTarget;
  }
}
</script>
<style lang="scss" scoped>
    label {
        margin-bottom: 15px;
        margin-right: 25px;
    }

    /* element affected by the menu commands */
    #menuTarget {
        font-size: 18pt;
        text-align: center;
        padding: 16px;
        margin: 6px 0;
        background: #00c1d5;
        color: black;
        border: 1px solid rgba(0, 0, 0, .25);
    }

    /* bar containing the menus */
    .menubar {
        position: sticky;
        display: flex;
        background: #fddfa7;
        padding: 12px;
        top: 0;
    }

    /* customize wijmo default styles */
    .wj-state-selected {
        color: black;
        background: orange;
    }

    .container-fluid .wj-menu {
        padding: 6px 14px;
        border: none;
        background: transparent;
    }

    .container-fluid .wj-menu:hover,
    .container-fluid .wj-menu.wj-state-focused {
        background: rgba(0, 0, 0, .05);
    }

    .container-fluid .wj-menu .wj-input-group .wj-input-group-btn {
        /* hide the menu's drop-down buttons */
        display: none;
    }

    .wj-listbox.wj-menu-items {
        min-width: 8em;
        border: none;
        background: #fddfa7;
    }

    .wj-listbox.wj-menu-items .wj-listbox-item:not(.wj-separator) {
        padding: 6px 12px;
    }
</style>
