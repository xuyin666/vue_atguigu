/**
 * This file is the entry file
 */
// import Vue
import Vue from 'vue'
// import App, the parent of all the Component 
import App from './App.vue'

// close the vue production tips
Vue.config.productionTip = false

// create the instance of Vue -- vm
// new Vue({
//   // put the app component in the component
//   render: h => h(App),
// }).$mount('#app')


new Vue({
  el: '#app',
  // put the app component in the component
  render: h => h(App),
  // template: `<h1>Hello</h1>`

  // render(createElement){
  //   // createElement('h1', 'hello')
  //   // console.log('render')
  //   return createElement('h1', 'hello');
  // }

  // template: `<App></App>`,
  // components: {
  //     App
  // }
})