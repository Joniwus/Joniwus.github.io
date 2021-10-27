export default {
    data () {
        return {
            mobileTreshold: 768,
            _windowWidth: window.innerWidth,
            _windowHeight: window.innerHeight
        };
    },
    computed: {
        isMobile () {
            return this._windowWidth < this.mobileTreshold;
        }
    },
    mounted () {
        window.addEventListener('resize', () => {
            this._windowWidth = window.innerWidth;
            this._windowHeight = window.innerHeight;
        });
    }
};
