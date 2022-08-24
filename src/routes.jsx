/* import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoticeOfPrivacy from "./pages/Legal/NoticeOfPrivacy";
import TermsAndConditions from "pages/Legal/TermsAndConditions"; */

// Modules
import profile from "./modules/Post/post.routes";
/* import institutionRoutes from "modules/Institution/institution.routes";
import categoryRoutes from "modules/Category/category.routes";
import userRoutes from "modules/Users/user.routes";
import authRoutes from "modules/Auth/auth.routes";
import Menu from "./components/Menu/Menu";
import pagesRoutes from "modules/Pages/pages.routes";
import donationRoutes from "modules/Donation/donation.routes";
import paypalRoutes from "modules/Paypal/paypal.routes";
import cardRoutes from "modules/Card/card.routes";
import oxxoPayRoutes from "modules/OxxoPay/oxxoPay.routes";
import configurationRoutes from "modules/Configuration/configuration.routes";
import historicalRoutes from "modules/Historical/historical.routes";
import InitialConfiguration from "modules/InitialConfiguration/InitialConfiguration";
import DonadoraView from "./components/Donadora/donadoraView"; */
/* PLOP_INJECT_IMPORT */

export const routes = [
  /* { path: "/", public: true, component: Home },
  { path: "/configure", public: true, component: InitialConfiguration },
  { path: "/about", public: true, component: About },
  { path: "/notice-of-privacy", public: true, component: NoticeOfPrivacy },
  { path: "/dashboard/menu", bypass: true, component: Menu },
  { path: "/dashboard/donadora", bypass: true, component: DonadoraView }, */
  ...profile,
  /*   ...institutionRoutes,
  ...categoryRoutes,
  ...campaignRoutes,
  ...userRoutes,
  ...pagesRoutes,
  ...donationRoutes,
  ...paypalRoutes,
  ...cardRoutes,
  ...oxxoPayRoutes,
  ...configurationRoutes,
  ...historicalRoutes, */
  /* PLOP_INJECT_EXPORT */
];
