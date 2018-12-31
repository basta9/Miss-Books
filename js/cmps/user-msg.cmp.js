'use strict';
import eventBus, { SHOW_SAVED_MESSAGE } from '../event-bus.js'

export default {
    template: `
               <div class="user-msg" :class="msg.type" v-if="msg">
                   {{msg.txt}}
               </div>`,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on(SHOW_SAVED_MESSAGE, msg => {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000)
        });
    }

}
