'use strict'

export default {
    props: ['txt'],
    template: `
        <section class="long-text-container">
            <p class="long-text" v-if="shortened">
                Description: {{shortenDesc}}
                <button class="full-desc-btn" @click="shortened = !shortened">
                    ...Read More
                </button>
            </p>
            <p class="short-desc" v-else>
                Description: {{txt}}
            </p>
        </section>
    `,
    data() {
        return {
            shortened: true,
        }
    },
    computed: {

        shortenDesc() {
            return this.txt.substr(0, 99)
        }
    },
    created() {
        this.shortened = this.txt.length > 99
    },
    methods: {

    },
}


