// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueQuill from "vue-quill";
import VModal from 'vue-js-modal';
import InputTag from 'vue-input-tag';
import Notify from 'vue2-notify';

import hljs from 'highlight.js';
import VueQuillEditor, { Quill } from 'vue-quill-editor';
import { ImageDrop } from 'quill-image-drop-module';
 //import ImageResize from 'quill-image-resize-module';

 import VueQuill1 from 'vue-quill-editor'
 window.Quill = Quill;

 const ImageResize = require( 'quill-image-resize-module' );

 Quill.register('modules/imageResize', ImageResize);
// require styles
 import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
 import 'quill/dist/quill.bubble.css'

import VueDisqus from 'vue-disqus'

//////////////////////////////
const toolbar = [['image']];
const modules = { toolbar, imageResize: true };
Vue.use(VueQuill1,{modules});
////////////////////////////////////

Vue.use(VueQuillEditor, /* { default global options } */)

Quill.register('modules/imageDrop', ImageDrop);

Vue.use(VueQuill);

Vue.use(VModal);

Vue.use(VueDisqus);

Vue.use(Notify, {
  itemClass: 'notification',
  position: 'bottom-left'
})
const types = {
  info: { itemClass: 'is-info', },
  error: { itemClass: 'is-danger' },
  warning: { itemClass: 'is-warning' },
  success: { itemClass: 'is-success', iconClass: 'fa fa-lg fa-check-circle' }
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD_9U3AZqZ-cz1jr2ZK3TW4DCyyshoiXF4",
    authDomain: "lesspod-dev.firebaseapp.com",
    databaseURL: "https://lesspod-dev.firebaseio.com",
    projectId: "lesspod-dev",
    storageBucket: "",
    messagingSenderId: "406114890288"
};
firebase.initializeApp(config);

// db calls are made based on this deploymentTarget's value
// fbase deploy script will change it's value
export const globalVariables = new Vue({
  data: {
    deploymentTarget: 'localhost',
    LOCALHOST: 'localhost',
    FBASE: 'firebase'
  }
})

Vue.$notify.setTypes(types);

Vue.component('input-tag', InputTag);

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:1234/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
