import { createRouter, createWebHashHistory } from 'vue-router'

import CreatePlayerForm from './components/CreatePlayerForm'
import FootballResults from './components/FootballResults'
import StartMatch from "./views/StartMatch";
import Matches from "./views/Matches";

const routes = [
    { path: '/', component: StartMatch },
    { path: '/matches', component: Matches },
    { path: '/matches/current', component: FootballResults },
    { path: '/players/create', component: CreatePlayerForm },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
