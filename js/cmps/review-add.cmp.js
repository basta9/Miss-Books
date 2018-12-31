'use strict';
import { bookService } from '../services/book.service.js';
import eventBus from '../event-bus.js'
import { utilService } from '../services/util.service.js'

export default {
    template: `<form @submit="sendFeedback" class="review">
                    <h3>Write a Review:</h3>
                    Name: <input type="text" placeholder="Your Name" v-model="name"> <br>
                    Book Rating: <select v-model="rating">
                        <option>★</option>
                        <option>★★</option>
                        <option>★★★</option>
                        <option>★★★★</option>
                        <option>★★★★★</option>
                    </select> <br>
                    Read At: <input type="date" v-model="readAt"> <br>
                    Review:<br>
                    <textarea v-model="review" cols="40" rows="10"></textarea> <br>
                    <button>Send</button>
                </form>`,
    data() {
        return {
            id: utilService.makeId(),
            name: 'book reader',
            rating: null,
            readAt: new Date(),
            review: ''
        }
    },
    methods: {
        sendFeedback() {
            var feedBack = {
                name: this.name,
                rating: this.rating,
                readAt: this.readAt,
                review: this.review
            };

            this.$emit('reviewd', feedBack);
        }
    },
}
