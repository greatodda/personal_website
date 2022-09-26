Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: '#app',
    data: {
        display: "about"
    },
    methods: {
      humanizeURL: function (url) {
        return url
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
      }, 
    }
  })