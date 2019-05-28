import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.directive('rainbow', {
    bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
})

Vue.directive('theme', {
    bind(el, binding) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1200px";
        } else if (binding.value == 'narrow') {
            el.style.maxWidth = "560px";
        }

        if (binding.arg == 'column') {
            el.style.background = "#999999";
            el.style.padding = '20px';
        }
    }
})

Vue.filter("to-uppercase", function(value) {
    return value.toUpperCase();
})



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')