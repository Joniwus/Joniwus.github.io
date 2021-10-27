export default {
    data () {
        return {
            _windowWidth: window.innerWidth,
            _windowHeight: window.innerHeight
        };
    },
    computed: {
        isMobile () {
            return this._windowWidth < 768;
        }
    },
    mounted () {
        console.log(window);
        window.addEventListener('resize', () => {
            this._windowWidth = window.innerWidth;
            this._windowHeight = window.innerHeight;
        });
    }
};
