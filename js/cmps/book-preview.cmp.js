'use strict'

export default {
    props: ['book'],
    template: `
                    <li>
                    <router-link :to="bookDetailsLink" class="book-container">
                           <h4>{{book.title}}</h4>
                           <img :src="book.thumbnail" />
                           <p>Price: {{book.listPrice.amount}}{{bookCurrencySymbol}}</p>
                    </router-link>
                    </li>
    `,
    computed: {
        bookCurrencySymbol() {
            var curr = this.book.listPrice.currencyCode
            if (curr === 'EUR') return '€'
            else if (curr === 'ILS') return '₪'
            else return '$'
        },
        bookDetailsLink() {
            return `/book/${this.book.id}`;
        }
    }
}


