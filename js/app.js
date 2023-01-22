var app = new Vue({
    el: '#app',
    data: {
        flag: true,
        systems: ['android', 'ios', 'window'],
        uid: 10
    },
    methods: {
        popupAlert: function() {
            return alert('경고창 표시');
        }
    }
});