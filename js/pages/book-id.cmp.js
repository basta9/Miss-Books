'use strict'
import longText from '../cmps/long-text.cmp.js';
import bookReview from '../cmps/review-add.cmp.js';
import reviewPreview from '../cmps/review-preview.cmp.js';
import { bookService } from '../services/book.service.js'
import eventBus, { SHOW_SAVED_MESSAGE } from '../event-bus.js'


export default {
    template: `
    <section v-if="book">
        <div class="details-nav">
        <router-link :to="'/book/'+nextBookId">Previous Book -</router-link>
        <router-link to="/book">Back to List</router-link>
        <router-link :to="'/book/'+prevBookId">- Next Book</router-link>
        </div>
        <div  class="book-details-container">
            <div class="book-details-img-container">
                <img :src="book.thumbnail" class="book-details-img"/>
                <img class="sale-img" v-if="book.listPrice.isOnSale" src="img/sale.png"/>
            </div>
            <div class="book-details">
            
                <h3>Title: {{book.title}}</h3>
                <h6>Book ID: {{book.id}}</h6>
                <p><b>Author: </b><span v-for="author in book.authors">{{author}}</span></p>
                <p><b>List Price: </b> <span :class="bookPriceClass">{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</span></p>
                <p class="read-length" v-if="readLength">{{readLength}}</p>
                <p class="publish-date" v-if="publishDate">{{publishDate}}</p>
                <p>Publish date: {{book.publishedDate}}</p>             
                <long-text :txt="book.description"></long-text>
                <p>Pages: {{book.pageCount}}</p>
                <p>Categories: <span v-for="category in book.categories">{{category}}, </span></p>
                <p>Language: {{book.language}}</p>
            </div>
        </div>
                <book-review @reviewd="saveFeedback"></book-review>
                <review-preview v-if="book.feedback" @delete="deleteReview" v-for="review in book.feedback" :review="review"></review-preview>
    </section>
    `,
    data() {
        return {
            book: null,
            isLongTxt: null,
            prevBookId: null,
            nextBookId: null
        }
    },
    created() {
        let bookPrm = bookService.getBookById(this.$route.params.theBookId);
        bookPrm.then(currBook => this.book = currBook)
        this.loadBookData();
    },
    methods: {
        saveFeedback(feedback) {
            console.log('feedback saved!');
            eventBus.$emit(SHOW_SAVED_MESSAGE, { type: 'success', txt: 'Your review was Saved!' });
            bookService.addFeddback(this.book.id, feedback);
        },
        deleteReview(reviewId) {
            bookService.deleteReview(this.book.id, reviewId);
        },
        loadBookData() {
            const bookId = this.$route.params.theBookId;
            bookService.getBookById(bookId)
                .then(book => this.book = book)

            bookService.neighborBook(bookId)
                .then(neighbor => {
                    this.nextBookId = neighbor.next.id;
                    this.prevBookId = neighbor.prev.id;
                });
        }
    },
    computed: {
        readLength() {
            var { pageCount } = this.book;

            if (pageCount > 500) return 'Long Reading'
            else if (pageCount > 200) return 'Decent Reading'
            else if (pageCount < 100) return 'Light Reading'
            else return '';
        },
        publishDate() {
            var bookPublishYear = this.book.publishedDate
            var currYear = new Date().getFullYear()
            if (currYear - bookPublishYear > 10) return 'Veteran Book'
            else if (currYear - bookPublishYear <= 1) return 'New Book!'

            return '';
        },
        bookPriceClass() {
            var bookPrice = this.book.listPrice.amount
            return {
                expensive: bookPrice > 150,
                cheap: bookPrice < 20,
            }
        },
        isLongDesc() {
            return this.book.description.length > 99;
        },
        shortDesc() {
            if (this.isLongDesc) return this.book.description.substr(0, 99) + '...';
            else return this.book.description;
        }
    },
    watch: {
        '$route.params.theBookId': function (id, prevValue) {
            console.log('Watch - ROUTE PARAM WAS CHANGED', id, 'PREV:', prevValue);
            this.loadBookData();
        }
    },
    components: {
        longText,
        bookReview,
        reviewPreview
    }
}


