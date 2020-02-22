// Directive v-model message
// new Vue({
//     el: '#app',
//     data: {
//         message: ''
//     }
// })

// Login
new Vue({
    el: '#app',
    data: {
        validationEmail: 'Email not matches.',
        validationPassword: 'Password not matches',
        email: '',
        password: '',
    }
})

// new Vue({
//     el: '#app',
//     data: {
//         show: true,
//         benar: 'Correct!',
//         salah: 'Incorrect!',
//         int1: 4,
//         int2: 4,
//         result: null,
//         kilometers: 0,
//         meters: 0,
//     },
//     computed: {
//         sum: function () {
//             return this.int1 + this.int2
//         }
//     },
//     methods: {
//         sumProcess: function (int3) {
//             return this.result = this.int1 + this.int2 + int3
//         }
//     },
//     watch: {
//         kilometers: function (val) {
//             this.kilometers = val;
//             this.meters = val * 1000;
//         },
//         meters: function (val) {
//             this.kilometers = val / 1000;
//             this.meters = val;
//         }
//     },
// })