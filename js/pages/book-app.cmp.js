'use strict'
import { bookService } from '../services/book.service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'

export default {
    template: `
        <section class="book-app-container">
            <book-filter v-if="!selectedBook" @filtered="setFilter"></book-filter>
            <book-list v-if="!selectedBook" :books="booksToShow" @selectBook="onSelectedBook"></book-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: [],
            selectedBook: null,
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    computed: {
        booksToShow() {
            if (!this.filter) return this.books;
            return this.books
                .filter(book => book.title.includes(this.filter.bookTitle))
                .filter(book => book.listPrice.amount < this.filter.maxPrice || !this.filter.maxPrice)
                .filter(book => book.listPrice.amount > this.filter.minPrice || !this.filter.minPrice)
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        onSelectedBook(book) {
            this.selectedBook = book
        }
    },
    components: {
        bookList,
        bookFilter,
    }
}


