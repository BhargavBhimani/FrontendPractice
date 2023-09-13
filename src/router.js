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
import Ecwid from './retiered-projects/ecwid.vue'
import Grasshoper from './retiered-projects/grasshoper.vue'
import Instrument from './retiered-projects/instrument.vue'
import RedSquare from './retiered-projects/red-square.vue'
import ShopifyDev from './retiered-projects/shopify-dev.vue'
import Sketch from './retiered-projects/sketch.vue'
import Trello from './retiered-projects/trello.vue'
import Testing from './Testing.vue'
import Ableton from './store/ableton.js'
import Abstract from './store/abstract.js';
import BackatageTalks from './store/backstage-talks.js'
import Basic from './store/basic.js'
import Bonsai from './store/bonsai.js'
import CanalStreetMarket from './store/canal-street-market.js'
import DeplaceMaison from './store/deplace-maison.js'
import FigmaMerch from './store/figma-merch.js'
import GoDaddy from './store/go-daddy.js'
import Lobe from './store/lobe.js'
import Monogram from './store/monogram.js'
import MonsterCat from './store/monster-cart.js'
import Nintendo from './store/nintendo.js'
import OhStudio from './store/oh-studio.js'
import Podia from './store/podia.js'
import Pulse from './store/pulse.js'
import Qrates from './store/qrates.js'
import Starbucks from './store/starbucks.js'
import Stark from './store/stark.js'

const routes = [
    {
        path: '/',
        component: Index
    },

    {
        path: '/projects',
        component: Projects
    },

    {
        path: '/blog',
        component: Blog

    },

    {
        path: '/faq',
        component: Faq
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/blog/Where-to-host-your-frontend-projects',
        component: BlogPageOne
    },
    {
        path: '/blog/build-your-portfolio-faster',
        component: BlogPageTwo
    },
    {
        path: '/blog/frontend-practice-how-it-works',
        component: BlogPageThree
    },
    {
        path: '/projects/ableton',
        component: Testing,
        props: {
            pageData: Ableton
        }
    },
    {
        path: '/projects/abstract',
        component: Testing,
        props: {
            pageData: Abstract
        }
    },
    {
        path: '/projects/backstage-talks',
        component: Testing,
        props: {
            pageData: BackatageTalks
        }
    },
    {
        path: '/projects/basic',
        component: Testing,
        props: {
            pageData: Basic
        }
    },
    {
        path: '/projects/bonsai',
        component: Testing,
        props: {
            pageData: Bonsai
        }
    },
    {
        path: '/project/canal-street-market',
        component: Testing,
        props: {
            pageData: CanalStreetMarket
        }
    },
    {
        path: '/projects/deplace-maison',
        component: Testing,
        props: {
            pageData: DeplaceMaison
        }
    },
    {
        path: '/projects/figma-merch',
        component: Testing,
        props: {
            pageData: FigmaMerch
        }
    },
    {
        path: '/projects/go-daddy',
        component: Testing,
        props: {
            pageData: GoDaddy
        }
    },
    {
        path: '/projects/lobe',
        component: Testing,
        props: {
            pageData: Lobe
        }
    },
    {
        path: '/projects/monogram',
        component: Testing,
        props: {
            pageData: Monogram
        }
    },
    {
        path: '/projects/monstercat',
        component: Testing,
        props: {
            pageData: MonsterCat
        }
    },
    {
        path: '/projects/nintendo',
        component: Testing,
        props: {
            pageData: Nintendo
        }
    },
    {
        path: '/projects/oh-studio',
        component: Testing,
        props: {
            pageData: OhStudio
        }
    },
    {
        path: '/projects/podia',
        component: Testing,
        props: {
            pageData: Podia
        }
    },
    {
        path: '/projects/pulse',
        component: Testing,
        props: {
            pageData: Pulse
        }
    },
    {
        path: '/projects/qrates',
        component: Testing,
        props: {
            pageData: Qrates
        }
    },
    {
        path: '/projects/starbucks',
        component: Testing,
        props: {
            pageData: Starbucks
        }
    },
    {
        path: '/projects/stark',
        component: Testing,
        props: {
            pageData: Stark
        }
    },
    {
        path: '/projects/ecwid',
        component: Ecwid
    },
    {
        path: '/projects/grasshoper',
        component: Grasshoper
    },
    {
        path: '/projects/instrument',
        component: Instrument
    },
    {
        path: '/projects/red-square',
        component: RedSquare
    },
    {
        path: '/projects/shopify-dev',
        component: ShopifyDev
    },
    {
        path: '/projects/sketch',
        component: Sketch
    },
    {
        path: '/projects/trello',
        component: Trello
    },
    {
        path: '/testing',
        component: Testing
    },

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