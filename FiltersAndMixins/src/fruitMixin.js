export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((i) => i.match(this.filterText));
        }
    }
};