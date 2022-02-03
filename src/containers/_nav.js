import CIcon from "@coreui/icons-react";
import React from "react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Ordenes",
    to: "/orders",
    icon: <CIcon name="cil-cart" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Todas",
        to: "/orders/all",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pendientes de Pago",
        to: "/orders/unpaid",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Buscando papelería",
        to: "/orders/searching_stationery",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Imprimiendo",
        to: "/orders/printing",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Enviando",
        to: "/orders/sending",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Completadas",
        to: "/orders/completed",
      },
      {
        _tag: "CSidebarNavItem",
        name: "En Disputa",
        to: "/orders/reviewing",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Usuarios",
    to: "/users",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Todos",
        to: "/users/all",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Clientes",
        to: "/users/user",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Administradores",
        to: "/users/admin",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Operadores",
        to: "/users/operator",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Usuarios de Papelería",
        to: "/users/stationery",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Papelerías",
    to: "/stationerys",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Precios",
    to: "/prices",
    icon: <CIcon name="cil-dollar" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Impresiones",
        to: "/prices",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Otros Precios",
        to: "/other-prices",
      }
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Mantenimientos",
    to: "/maintenances",
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Horarios",
    to: "/schedules",
    icon: <CIcon name="cil-code" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cupones",
    to: "/coupons",
    icon: <CIcon name="cil-tags" customClasses="c-sidebar-nav-icon" />,
  },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Theme"],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Colors",
  //   to: "/theme/colors",
  //   icon: "cil-drop",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Typography",
  //   to: "/theme/typography",
  //   icon: "cil-pencil",
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Components"],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Base",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Breadcrumb",
  //       to: "/base/breadcrumbs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Cards",
  //       to: "/base/cards",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Carousel",
  //       to: "/base/carousels",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Collapse",
  //       to: "/base/collapses",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Forms",
  //       to: "/base/forms",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Jumbotron",
  //       to: "/base/jumbotrons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "List group",
  //       to: "/base/list-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navs",
  //       to: "/base/navs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navbars",
  //       to: "/base/navbars",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Pagination",
  //       to: "/base/paginations",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Popovers",
  //       to: "/base/popovers",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Progress",
  //       to: "/base/progress-bar",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Switches",
  //       to: "/base/switches",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tables",
  //       to: "/base/tables",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tabs",
  //       to: "/base/tabs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tooltips",
  //       to: "/base/tooltips",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Buttons",
  //   route: "/buttons",
  //   icon: "cil-cursor",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons",
  //       to: "/buttons/buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Brand buttons",
  //       to: "/buttons/brand-buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons groups",
  //       to: "/buttons/button-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Dropdowns",
  //       to: "/buttons/button-dropdowns",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Charts",
  //   to: "/charts",
  //   icon: "cil-chart-pie",
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Icons",
  //   route: "/icons",
  //   icon: "cil-star",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Free",
  //       to: "/icons/coreui-icons",
  //       badge: {
  //         color: "success",
  //         text: "NEW",
  //       },
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Flags",
  //       to: "/icons/flags",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "CoreUI Brands",
  //       to: "/icons/brands",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Notifications",
  //   route: "/notifications",
  //   icon: "cil-bell",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Alerts",
  //       to: "/notifications/alerts",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Badges",
  //       to: "/notifications/badges",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Modal",
  //       to: "/notifications/modals",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Toaster",
  //       to: "/notifications/toaster",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Widgets",
  //   to: "/widgets",
  //   icon: "cil-calculator",
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Extras"],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Pages",
  //   route: "/pages",
  //   icon: "cil-star",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Login",
  //       to: "/login",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Register",
  //       to: "/register",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 404",
  //       to: "/404",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 500",
  //       to: "/500",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Disabled",
  //   icon: "cil-ban",
  //   badge: {
  //     color: "secondary",
  //     text: "NEW",
  //   },
  //   addLinkClass: "c-disabled",
  //   disabled: true,
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  //   className: "m-2",
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Labels"],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label danger",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-danger",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label info",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-info",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Label warning",
  //   to: "",
  //   icon: {
  //     name: "cil-star",
  //     className: "text-warning",
  //   },
  //   label: true,
  // },
  // {
  //   _tag: "CSidebarNavDivider",
  //   className: "m-2",
  // },
];
