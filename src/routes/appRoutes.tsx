import { RouteType } from "./config";


import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import { HomePage } from "../pages/Home/HomePage";
import { DashBoardPageLayOut } from "../pages/dashboard/DashBoardPageLayOut";
import { DashboardIndex } from "../pages/dashboard/DashboardIndex";
import { DEfaultPage } from "../pages/dashboard/DEfaultPage";
import { AnalyticsPage } from "../pages/component/AnalyticsPage";
import { SaasPage } from "../pages/component/SaasPage";
import { AlertPage } from "../pages/component/AlertPage";
import { ButtonPage } from "../pages/component/ButtonPage";
import { ChangeLogPage } from "../pages/changelog/ChangeLogPage";
import { ComponentPageLayOut } from "../pages/component/ComponentPageLayOut";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import InstallationPage from "../pages/installation/InstallationPage";


const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
    child: [

      {
        index: true,
        element: <HomePage />,
        state: "home"
      },
      {
        path: "/installation",
        element: <InstallationPage />,
        state: "installation",
        sidebarProps: {
          displayText: "About",
          icon: <FileDownloadOutlinedIcon />
        }
      },
      {
        path: "/dashboard",
        element: <DashBoardPageLayOut />,
        state: "dashboard",
        sidebarProps: {
          displayText: "Model Management",
          icon: <DashboardOutlinedIcon />
        },
        child: [
          {
            index: true,
            element: <DashboardIndex />,
            state: "dashboard.index"
          },
          {
            path: "/dashboard/default",
            element: <DEfaultPage />,
            state: "dashboard.default",
            sidebarProps: {
              displayText: "New"
            },
          },
          {
            path: "/dashboard/analytics",
            element: <AnalyticsPage />,
            state: "dashboard.analytics",
            sidebarProps: {
              displayText: "Revision"
            }
          },
          {
            path: "/dashboard/saas",
            element: <SaasPage />,
            state: "dashboard.saas",
            sidebarProps: {
              displayText: "Tools"
            }
          }
        ]
        },
      
      {
        path: "/component",
        element: <ComponentPageLayOut />,
        state: "component",
        sidebarProps: {
          displayText: "Production Management",
          icon: <AppsOutlinedIcon />
        },
        child: [
          {
            path: "/component/alert",
            element: <AlertPage />,
            state: "component.alert",
            sidebarProps: {
              displayText: "Simple Assembly"
            },
          },
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Inspection"
            }
          }
          ,
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Auto Verification"
            }
          }
          ,
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Manual Verification"
            }
          }
          ,
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Labelling"
            }
          }
          ,
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Shipping"
            }
          }
        ]
      },
      {
        path: "/component",
        element: <ComponentPageLayOut />,
        state: "component",
        sidebarProps: {
          displayText: "Registration Management",
          icon: <AppsOutlinedIcon />
        },
        child: [
          {
            path: "/component/alert",
            element: <AlertPage />,
            state: "component.alert",
            sidebarProps: {
              displayText: "Create User"
            },
          },
          {
            path: "/component/button",
            element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
              displayText: "Print Barcode ID Card"
            }
          }
        ]
      },
      {
        path: "/documentation",
        element: <DocumentationPage />,
        state: "documentation",
        sidebarProps: {
          displayText: "Tracking",
          icon: <ArticleOutlinedIcon />
        }
      },
      {
        path: "/changelog",
        element: <ChangeLogPage />,
        state: "changelog",
        sidebarProps: {
          displayText: "Report",
          icon: <FormatListBulletedOutlinedIcon />
        }
      }
    ]
  },

];
const appRoutes2: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "About",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashBoardPageLayOut />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Model Management",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DEfaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "New"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Revision"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Tools"
        }
      }
    ]
    },
  
  {
    path: "/component",
    element: <ComponentPageLayOut />,
    state: "component",
    sidebarProps: {
      displayText: "Production Management",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Simple Assembly"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Inspection"
        }
      }
      ,
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Auto Verification"
        }
      }
      ,
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Manual Verification"
        }
      }
      ,
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Labelling"
        }
      }
      ,
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Shipping"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayOut />,
    state: "component",
    sidebarProps: {
      displayText: "Registration Management",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Create User"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Print Barcode ID Card"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Tracking",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangeLogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Report",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;