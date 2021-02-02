import CreatePlayerForm from './components/CreatePlayerForm'
import FootballResults from './components/FootballResults'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: FootballResults },
    { path: '/players/create', component: CreatePlayerForm },
]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
