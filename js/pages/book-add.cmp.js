'use strict'
import { bookService } from '../services/book.service.js';


export default {
    template: `
        <section class="book-add">
            <form>
                <h3>Add a book to list:</h3>
                <input type="text" @input="search" v-model="searchKey">
            </form>
            <ul v-if="searchKey.length" class="search-list">
                <li v-for="(book) in searchOpt" class="search-opt">
                    {{book.title}}<div @click="addToList(book)">+</div>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            searchKey: '',
            searchOpt: [],
        }
    },
    methods: {
        search() {
            console.log(this.searchKey === '');

            bookService.findBook(this.searchKey)
                .then(res => {
                    this.searchOpt = res
                });
        },
        addToList(book) {
            bookService.addGoogleBook(book);
        }
    }
}
