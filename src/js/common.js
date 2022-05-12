document.addEventListener('alpine:init', function () {
    Alpine.data('slider', () => ({
        slider: '',
        input: '',
        currency: ' ₸',
        typing() {
            const triggerEvents = true,
                value = Number(this.input.value.replace(this.currency));
            this.slider.rangeSlider.update({value}, triggerEvents);
            this.formattedValue(value)
        },
        clear() {
            this.input.value = '';
        },
        formattedValue(value) {
            this.input.value = value + this.currency;
        },
        init() {
            this.slider = this.$el.querySelector('input[type=range]');
            this.input = this.$el.querySelector('input[type=text]');

            const that = this;

            rangeSlider.create(this.slider, {
                onSlideEnd(position, value) {
                    that.formattedValue(position)
                }
            });
        }
    }))

    Alpine.store('nav', {
        isOpen: false,
        media: matchMedia('(max-width: 1199px)'),

        show() {
            this.isOpen = true;
            console.log(1);
        },
        hide() {
            this.isOpen = false;
        }
    })
});
