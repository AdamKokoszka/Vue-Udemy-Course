import Home from './components/home.vue'
import Stocks from './components/stocks.vue'
import Portfolio from './components/portfolio.vue'

export const routes = [
  { path: '/', component: Home},
  { path: '/stocks', component: Stocks},
  { path: '/portfolio', component: Portfolio}
]