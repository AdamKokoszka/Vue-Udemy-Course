import Home from './components/home.vue'
import Stocks from './components/stocks/stocks.vue'
import Portfolio from './components/portfolio/portfolio.vue'

export const routes = [
  { path: '/', component: Home},
  { path: '/stocks', component: Stocks},
  { path: '/portfolio', component: Portfolio}
]