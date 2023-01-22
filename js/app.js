var Body = { template: '<div>This is Body</div>' };
var Header = { template: '<div>This is Header</div>' };
var Footer = { template: '<div>This is Footer</div>' };
var Login = { template: '<div>This is Login</div>' };

var router = new VueRouter({
    routes : [
        {
            path: '/',
            components: {
                default: Body,
                header: Header,
                footer: Footer
            },
        },
        {
            path: '/login',
            components: {
                default: Login,
                header: Header,
                footer: Footer
            },
        }
    ]
});

var app = new Vue({
    router
}).$mount('#app');