module.exports = {
    routes: [
        {
            id: 0,
            route: require('./users'),
            routeName: '/users'
        },
        {
            id: 1,
            route: require('./posts'),
            routeName: '/posts'
        }
    ]
}