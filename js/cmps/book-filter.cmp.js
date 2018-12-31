'use strict'

export default {
    template: `
        <section class="book-filter-container">
            <form>
                <h3>Find a Book:</h3>
                <input type="text" placeholder="Book Title" @input="setFilter" v-model="filterBy.bookTitle">
                <input type="text" placeholder="From price..." @input="setFilter" v-model.number="filterBy.minPrice">
                <input type="text" placeholder="To price..." @input="setFilter" v-model.number="filterBy.maxPrice">
            </form>
        </section>
    `,
    data() {
        return {
            filterBy:
            {
                minPrice: '',
                maxPrice: '',
                bookTitle: '',
            }
        }
    },
    computed: {

    },
    created() {
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {
                minPrice: this.filterBy.minPrice,
                maxPrice: this.filterBy.maxPrice,
                bookTitle: this.filterBy.bookTitle,
            })
        }
    },
}


