'use strict';

export default {
    template: `
                <section class="nav-bar">
                    <router-link class="nav-opt" to="/about">About</router-link> 
                    <router-link class="nav-opt" to="/addBook">Add Book</router-link> 
                    <router-link class="nav-opt" exact to="/book">Book List</router-link> 
                </section>`,

}
