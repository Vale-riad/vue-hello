
const {createApp} = Vue

app=createApp({
    data() {
        return{
            message: 'ciao a tutti!',
            image: 'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png',
        }
    }
}).mount('#app')