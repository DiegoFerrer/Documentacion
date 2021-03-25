<script>
/* 
    import VueRouter from 'vue-router'
    vue.use(vueRouter);

    const router = new VueRouter({
        mode: 'history'm
        base: __dirname,
        routes:[
            {
            path: '/',
            component: Users
            },
            path: '/test',
            component: Test
            },
        ]
    })

    en main.js > new Vue, al final agregar }).$mount('#app')

   
*/
</script>

<script>
 new Vue({
        router,
        components: { App },
        template: '<App/>'
    }).$mount('#app')
</script>

<template>
	<router-link to="/test">Test</router-link>  <!-- El componente de aca, se mostrara en router view---- -->
	<router-view></router-view>
</template>
