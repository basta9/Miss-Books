'use strict';


export default {
    props: ['review'],
    template: `<section class="review book-review">
                    <button class="delete-review" @click="deleteReview">X</button>
                    <p>Review by: {{review.name}}</p>
                    <p>Rating: {{review.rating}}</p>
                    <p>Read at: {{review.readAt}}</p>
                    Review: <br>
                    <p>{{review.review}}</p>
                </section>`,

    methods: {
        deleteReview() {
            this.$emit('delete', this.review.id);
        }
    }
}