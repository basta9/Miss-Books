import aboutPage from './pages/about.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookId from './pages/book-id.cmp.js';
import bookAdd from './pages/book-add.cmp.js';


var myRoutes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage },
    { path: '/book', component: bookApp },
    { path: '/addBook', component: bookAdd },
    { path: '/book/:theBookId', component: bookId },
]

export default myRoutes;

