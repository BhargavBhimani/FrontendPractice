import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import Index from '../src/pages/index.vue'
import Projects from '../src/pages/projects.vue'
import Blog from '../src/pages/blog.vue'
import Faq from '../src/pages/faq.vue'
import Contact from '../src/pages/contact.vue'
import BlogPageOne from '../src/pages/blog-page-one.vue'
import BlogPageTwo from '../src/pages/blog-page-two.vue'
import BlogPageThree from '../src/pages/blog-page-three.vue'
import Ableton from './projects/ableton.vue'
import Abstract from './projects/abstarct.vue'
import BackstageTalks from './projects/backstage-talks.vue'
import Basic from './projects/basic.vue'
import Bonsai from './projects/bonsai.vue'
import CanalStreetMarket from './projects/canal-street-market.vue'
import DeplaceMaison from './projects/deplace-maison.vue'
import FigmaMerch from './projects/figma-merch.vue'
import GoDaddy from './projects/go-daddy.vue'
import Lobe from './projects/lobe.vue'
import Monogram from './projects/monogram.vue'
import MonsterCat from './projects/monster-cat.vue'
import Nintendo from './projects/nintendo.vue'
import OhStudio from './projects/oh-studio.vue'
import Podia from './projects/podia.vue'
import Pulse from './projects/pulse.vue'
import Qrates from './projects/qrates.vue'
import Starbucks from './projects/starbucks.vue'
import Stark from './projects/stark.vue'
import Ecwid from './retiered-projects/ecwid.vue'
import Grasshoper from './retiered-projects/grasshoper.vue'
import Instrument from './retiered-projects/instrument.vue'
import RedSquare from './retiered-projects/red-square.vue'
import ShopifyDev from './retiered-projects/shopify-dev.vue'
import Sketch from './retiered-projects/sketch.vue'
import Trello from './retiered-projects/trello.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/faq', component: Faq },
    { path: '/contact', component: Contact },
    { path: '/blog/Where-to-host-your-frontend-projects', component: BlogPageOne },
    { path: '/blog/build-your-portfolio-faster', component: BlogPageTwo },
    { path: '/blog/frontend-practice-how-it-works', component: BlogPageThree },
    { path: '/projects/ableton', component: Ableton },
    { path: '/projects/abstract', component: Abstract },
    { path: '/projects/backstage-talks', component: BackstageTalks },
    { path: '/projects/basic', component: Basic },
    { path: '/projects/bonsai', component: Bonsai },
    { path: '/project/canal-street-market', component: CanalStreetMarket },
    { path: '/projects/deplace-maison', component: DeplaceMaison },
    { path: '/projects/figma-merch', component: FigmaMerch },
    { path: '/projects/go-daddy', component: GoDaddy },
    { path: '/projects/lobe', component: Lobe },
    { path: '/projects/monogram', component: Monogram },
    { path: '/projects/monstercat', component: MonsterCat },
    { path: '/projects/nintendo', component: Nintendo },
    { path: '/projects/oh-studio', component: OhStudio },
    { path: '/projects/podia', component: Podia },
    { path: '/projects/pulse', component: Pulse },
    { path: '/projects/qrates', component: Qrates },
    { path: '/projects/starbucks', component: Starbucks },
    { path: '/projects/stark', component: Stark },
    { path: '/projects/ecwid', component: Ecwid },
    { path: '/projects/grasshoper', component: Grasshoper },
    { path: '/projects/instrument', component: Instrument },
    { path: '/projects/red-square', component: RedSquare },
    { path: '/projects/shopify-dev', component: ShopifyDev },
    { path: '/projects/sketch', component: Sketch },
    { path: '/projects/trello', component: Trello },

];

const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes,
    }
);

export default router;

const app = createApp()
app.use(router);