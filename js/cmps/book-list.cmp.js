// import { bookService } from "../services/book.service.js";
import bookPreview from '../cmps/book-preview.cmp.js'

'use strict'

export default {
    props: ['books'],
    template: `
        <section>
            <div class="books-list-container">
            <ul class="books-list">
                <book-preview v-for="currentBook in books" :book="currentBook"></book-preview>
            </ul>
        </div>
    </section>
    `,
    components: {
        bookPreview
    }
}


