import AddStationery from "./views/stationerys/AddStationery";
import Address from "./views/address/Address";
import Orders from "./views/orders/Orders";

import Printing from "./views/printings/Printing";
import Printings from "./views/printings/Printings";
import React from "react";
import StationeryAddress from "./views/address-stationery/StationeryAdress";
import Stationerys from "./views/stationerys/Stationerys";
import EditStationery from "./views/stationerys/EditStationery";
import Maintenances from "./views/maintenance/Maintenance";
import Schedules from "./views/schedule/Schedules";
import Coupons from "./views/coupons/Coupons";
import DocumentPrices from "./views/prices/documents/DocumentPrices";
import BlueprintPrices from "./views/prices/blueprints/BlueprintPrices";
import PosterPrices from "./views/prices/posters/PosterPrices";
import BaseBlueprintPrice from "./views/prices/blueprints/BaseBlueprintPrice";
import AdditionalBlueprintPrice from "./views/prices/blueprints/AdditionalBlueprintPrice";
import BasePosterPrice from "./views/prices/posters/BasePosterPrice";
import AdditionalPosterPrice from "./views/prices/posters/AdditionalPosterPrice";
import BaseDocumentPrice from "./views/prices/documents/BaseDocumentPrice";
import OpcDocumentPrice from "./views/prices/documents/OpcDocumentPrice";
import LaminateDocumentPrice from "./views/prices/documents/LaminateDocumentPrice";
import CrimpDocumentPrice from "./views/prices/documents/CrimpDocumentPrice";
import FolderDocumentPrice from "./views/prices/documents/FolderDocumentPrice";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/orders/:status", name: "Orders", component: Orders },
  { path: "/printing/:id", name: "Impresion", component: Printing },
  { path: "/printings/:orderId", name: "Impresiones", component: Printings },
  { path: "/address/:id", name: "Dirección", component: Address },
  {
    path: "/stationery-address/:id",
    name: "Dirección Papelería",
    component: StationeryAddress,
  },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users/:role", exact: true, name: "Users", component: Users },
  { path: "/user/:id", exact: true, name: "Usuario", component: User },
  {
    path: "/stationerys",
    exact: true,
    name: "Papelerías",
    component: Stationerys,
  },
  {
    path: "/stationerys/add",
    exact: true,
    name: "Agregar Papelería",
    component: AddStationery,
  },
  {
    path: "/stationerys/edit/:id",
    exact: true,
    name: "Editar Papelería",
    component: EditStationery,
  },
  {
    path: "/document-prices",
    exact: true,
    name: "Documentos",
    component: DocumentPrices,
  },
  {
    path: "/document-prices/base/:id",
    exact: true,
    name: "Base Documentos",
    component: BaseDocumentPrice,
  },
  {
    path: "/document-prices/paper/:id",
    exact: true,
    name: "Tipo Papel Documentos",
    component: OpcDocumentPrice,
  },
  {
    path: "/document-prices/laminate/:id",
    exact: true,
    name: "Opciones Enmicado Documentos",
    component: LaminateDocumentPrice,
  },
  {
    path: "/document-prices/crimp/:id",
    exact: true,
    name: "Opciones Encuadernado Documentos",
    component: CrimpDocumentPrice,
  },
  {
    path: "/document-prices/folder/:id",
    exact: true,
    name: "Folder Documentos",
    component: FolderDocumentPrice,
  },
  {
    path: "/blueprint-prices",
    exact: true,
    name: "Planos",
    component: BlueprintPrices,
  },
  {
    path: "/blueprint-prices/base/:id",
    exact: true,
    name: "Base Planos",
    component: BaseBlueprintPrice,
  },
  {
    path: "/blueprint-prices/custom/:id",
    exact: true,
    name: "Custom Planos",
    component: AdditionalBlueprintPrice,
  },
  {
    path: "/poster-prices",
    exact: true,
    name: "Posters",
    component: PosterPrices,
  },
  {
    path: "/poster-prices/base/:id",
    exact: true,
    name: "Base Poster",
    component: BasePosterPrice,
  },
  {
    path: "/poster-prices/custom/:id",
    exact: true,
    name: "Custom Poster",
    component: AdditionalPosterPrice,
  },
  {
    path: "/maintenances",
    exact: true,
    name: "Mantenimientos",
    component: Maintenances,
  },
  {
    path: "/schedules",
    exact: true,
    name: "Horarios",
    component: Schedules,
  },
  {
    path: "/coupons",
    exact: true,
    name: "Cupones",
    component: Coupons,
  },
];

export default routes;
