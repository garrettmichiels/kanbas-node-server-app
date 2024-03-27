export default function Hello(app) {

    function sayHello(req, res, next) {
        res.send('Hello World!');
    }

    function lifeIsGood(req, res, next) {
        res.send('Life is good!');
    }

    // app.get("/", sayHello);
    app.get("/life-is-good", lifeIsGood);
    app.get("/two-plus-two", (req, res, next) => res.send('2+2=4'));
    app.get('/hello', (req, res) => {res.send('Life is good!')})
    app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
}