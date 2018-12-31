'use strict';

var greatInt;

export default {
    template: `
                    <section class="about-container">
                       <h3>Book Store App:</h3>
                       <div class="about">
                            <img src="./img/about-books.png">
                            <p>
                                This application is used to present, update, sell and review books.
                                Develpoed with 'Vue' FrameWork and uses its fitures to create a 
                                unique user experience combined with recent and efficient programing.
                            </p>
                       </div>
                    </section>
    `,
    created() {
        greatInt = setInterval(() => {
            console.log('What a great Interval!');
        }, 1000)
    },
    destroyed() {
        console.log('Great Interval DESTROYED!');
        clearInterval(greatInt);
    }
}
