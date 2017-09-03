export const computedMixin = {
    computed: {
        textWithLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
};