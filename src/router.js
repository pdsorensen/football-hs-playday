import { createRouter, createWebHashHistory } from 'vue-router'

import CreatePlayerForm from './components/CreatePlayerForm'
import FootballResults from './components/FootballResults'
import StartMatchForm from "./components/StartMatchForm";

const routes = [
    { path: '/', component: StartMatchForm, meta: { transition: 'slide-left' }, },
    { path: '/matches/current', component: FootballResults },
    { path: '/players/create', component: CreatePlayerForm },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
