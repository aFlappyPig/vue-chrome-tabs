<template>
  <div class="chrome">
    <div class="chrome-tabs">
      <div class="chrome-tabs-header" @dblclick.self="addTab()">
        <div class="chrome-tab" v-for="(tab, index) in tabs" :key="index" @click.self="activeTab(tab, index)" :style="{ width: width+'px',transform: 'translate3d('+ index*(width-10) +'px, 0, 0)' }" :class="{'chrome-tab-current': tab.active }" :title="tab.title">
          <div class="chrome-tab-background">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 29">
                  <path d="M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z" />
                </symbol>
                <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 29">
                  <use xlink:href="#chrome-tab-geometry-left" />
                </symbol>
                <clipPath id="crop">
                  <rect class="mask" width="100%" height="100%" x="0" />
                </clipPath>
              </defs>
              <svg width="50%" height="100%">
                <use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-background" />
                <use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-shadow" />
              </svg>
              <g transform="scale(-1, 1)">
                <svg width="50%" height="100%" x="-100%" y="0">
                  <use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-background" />
                  <use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-shadow" />
                </svg>
              </g>
            </svg>
          </div>
          <div class="chrome-tab-favicon" :style="{ backgroundImage: 'url('+ tab.icon +')' }"></div>
          <div class="chrome-tab-title">{{ tab.title }}</div>
          <div class="chrome-tab-close" v-if="showClose" @click.self="closeTab(tab, index)"></div>
        </div>
      </div>
      <div class="chrome-tabs-bottom-bar"></div>
    </div>
    <div class="chrome-tabs-content" v-for="(tab, index) in tabs" :key="index" v-show="tab.active">
      <component :is="tab.component"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChromeTabs",
  props: {
    tabs: {
      type: Array,
      required: false,
      default: function() {
        return [
          {
            title: "New Tab",
            icon: "",
            active: true,
            component: ""
          }
        ];
      }
    },
    tabWidth: {
      type: Number,
      required: false,
      default: 230
    },
    max: {
      type: Number,
      required: false,
      default: 10
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    showClose: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      width: this.tabWidth,
      tabData: {
        title: "New Tab",
        icon: "",
        active: true,
        component: ""
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {});
  },
  methods: {
    addTab: function() {
      if (this.tabs.length >= this.max) return;
      let tabs = JSON.parse(JSON.stringify(this.tabs));
      tabs.forEach(t => (t.active = false));
      tabs.push(this.tabData);
      this.$emit("tabs-change", { type: "add", tabs });
      this.$nextTick(function() {
        this.width = this.calcTabWidth();
      });
    },
    closeTab: function(tab, index) {
      if (!this.showClose) return;
      if (this.tabs.length <= this.min) return;
      let tabs = JSON.parse(JSON.stringify(this.tabs));
      tabs.splice(index, 1);
      tabs.length > 0
        ? (tabs.forEach(t => (t.active = false)),
          (tabs[tabs.length - 1].active = true))
        : 1;
      this.$emit("tabs-change", { type: "close", tabs });
      this.$nextTick(function() {
        this.width = this.calcTabWidth();
      });
    },
    activeTab: function(tab, index) {
      if (this.tabs[index] && this.tabs[index].active) return;
      let tabs = JSON.parse(JSON.stringify(this.tabs));
      tabs.forEach(t => (t.active = false));
      tabs[index].active = true;
      this.$emit("tabs-change", { type: "active", tabs });
    },
    calcTabWidth: function() {
      if (!this.tabs.length) return +this.width;
      let tw = parseInt(
        window.getComputedStyle(document.querySelector(".chrome-tab")).width
      );
      let cw = parseInt(
        window.getComputedStyle(document.querySelector(".chrome-tabs-header"))
          .width
      );
      if (cw >= this.tabWidth * this.tabs.length) return +this.tabWidth;
      return +((cw - 70) / this.tabs.length).toFixed(2);
    }
  },
  computed: {}
};
</script>
<style rel="stylesheet/css" lang="css">
.chrome-tabs {
  box-sizing: border-box;
  position: relative;
  font-size: 10px;
  height: 4.2em;
  background: linear-gradient(#dad9da, #d9d8d9);
  padding: 1em 1.2em 0.45em 1.2em;
  border-radius: 0.5em 0.5em 0 0;
  box-shadow: 0 0.05em #b7b7b7;
  overflow: hidden;
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
}
.chrome-tabs * {
  box-sizing: inherit;
  font-family: inherit;
}
.chrome-tabs .chrome-tabs-bottom-bar {
  position: absolute;
  bottom: 0;
  height: 0.45em;
  left: 0;
  width: 100%;
  background: #f2f2f2;
  box-shadow: 0 -0.05em rgba(0, 0, 0, 0.27);
  z-index: 20;
}
.chrome-tabs .chrome-tabs-header {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.chrome-tabs .chrome-tab {
  position: absolute;
  left: 0;
  height: 2.8em;
  width: 24em;
  border: 0;
  margin: 0;
  z-index: 1;
}
.chrome-tabs .chrome-tab,
.chrome-tabs .chrome-tab * {
  user-select: none;
  cursor: default;
}
.chrome-tabs .chrome-tab .chrome-tab-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.chrome-tabs .chrome-tab .chrome-tab-background > svg {
  width: 100%;
  height: 100%;
}
.chrome-tabs .chrome-tab .chrome-tab-background > svg .chrome-tab-shadow {
  fill: none;
  stroke: rgba(0, 0, 0, 0.27);
  stroke-width: 0.5px;
}
.chrome-tabs .chrome-tab .chrome-tab-background > svg .chrome-tab-background {
  fill: #d0d0d0;
  transform: translateX(0.25px) translateY(0.25px);
}
.chrome-tabs .chrome-tab.chrome-tab-current {
  z-index: 999;
}
.chrome-tabs
  .chrome-tab.chrome-tab-current
  .chrome-tab-background
  > svg
  .chrome-tab-background {
  fill: #f2f2f2;
}
.chrome-tabs .chrome-tab.chrome-tab-just-added {
  top: 10px;
  animation: chrome-tab-just-added 120ms forwards ease-in-out;
}
@-moz-keyframes chrome-tab-just-added {
  to {
    top: 0;
  }
}
@-webkit-keyframes chrome-tab-just-added {
  to {
    top: 0;
  }
}
@-o-keyframes chrome-tab-just-added {
  to {
    top: 0;
  }
}
@keyframes chrome-tab-just-added {
  to {
    top: 0;
  }
}
.chrome-tabs.chrome-tabs-sorting .chrome-tab:not(.chrome-tab-currently-dragged),
.chrome-tabs:not(.chrome-tabs-sorting) .chrome-tab.chrome-tab-just-dragged {
  transition: transform 120ms ease-in-out;
}
.chrome-tabs .chrome-tab-favicon {
  position: relative;
  margin-left: 1.6em;
  height: 1.6em;
  width: 1.6em;
  background-size: 1.6em;
  margin-top: 0.6em;
  z-index: 3;
  display: inline-block;
  vertical-align: top;
  pointer-events: none;
}
.chrome-tabs .chrome-tab-title {
  position: relative;
  display: inline-block;
  vertical-align: top;
  color: #222;
  padding: 0 0.25em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.2em;
  margin-top: 0.7em;
  max-width: calc(100% - 5em);
  pointer-events: none;
}
.chrome-tabs .chrome-tab-close {
  position: absolute;
  width: 1.4em;
  height: 1.4em;
  border-radius: 50%;
  z-index: 2;
  right: 1.4em;
  top: 0.7em;
}
.chrome-tabs .chrome-tab-close::before {
  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#5a5a5a' stroke-linecap='round' stroke-width='1.125' d='M4 4 L10 10 M10 4 L4 10'></path></svg>");
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.chrome-tabs .chrome-tab-close:hover::before,
.chrome-tabs .chrome-tab-close:hover:active::before {
  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#fff' stroke-linecap='round' stroke-width='1.2' d='M4 4 L10 10 M10 4 L4 10'></path></svg>");
}
.chrome-tabs .chrome-tab-close:hover {
  background: #e25c4b;
}
.chrome-tabs .chrome-tab-close:hover:active {
  background: #b74a3b;
}
.chrome-tabs .chrome-tab {
  width: 243px;
}
.chrome .chrome-tabs-content {
  width: 100%;
  height: 200px;
}
</style>
