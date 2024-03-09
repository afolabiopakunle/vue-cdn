const app = Vue.createApp({
    data() {
        return {
            title: 'Power of the mind',
            author: 'Pastor Chris Oyakhilome',
            flowers: 60,
            showFlowers: true,
            url: 'www.pastorchrisonline.org',
            x: 0,
            y: 0,
            books: [
                {
                    title: 'Dragon fly',
                    author: 'Shoti',
                    isFav: true
                },
                {
                    title: 'Wonder fly',
                    author: 'Titto',
                    isFave: false
                },
                {
                    title: 'Eagle fly',
                    author: 'Votta',
                    isFav: true,
                },
            ]
        }
    },
    methods: {
        changeTitle() {
           this.showFlowers = !this.showFlowers;
        },
        handleEvent(e) {
            console.log(e);
        },

        mouseMovement(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
app.mount('#app')