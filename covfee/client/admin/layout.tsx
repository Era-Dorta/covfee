import * as React from "react";
import CovfeeLogo from "../art/logo.svg";
import {
  Alert,
  Col,
  Layout,
  Menu,
  Row,
  Typography,
  Result,
  Button,
} from "antd";
import Constants from "Constants";
import { Footer } from "antd/lib/layout/layout";
const { Title, Paragraph, Text } = Typography;
import { appContext, AppContextProps } from "../app_context";

import { CovfeeMenuItem } from "../gui";
import { AllPropsRequired } from "types/utils";

interface HeaderProps {
  menuItems?: React.ReactElement[];
  showLogin?: boolean;
}

export const AdminHeader: React.FunctionComponent<HeaderProps> = (props) => {
  const args: AllPropsRequired<HeaderProps> = {
    menuItems: [],
    showLogin: true,
    ...props,
  };

  const { logged, logout } = React.useContext(appContext);

  const handleLogin = () => {
    window.location.replace(Constants.admin.login_url);
  };

  const handleLogout = () => {
    logout().then(() => {
      window.location.replace(Constants.admin.login_url);
    });
  };

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{ position: "sticky", top: 0, width: "100%", zIndex: 1000 }}
    >
      <Menu.Item key="1" disabled>
        <CovfeeMenuItem />
      </Menu.Item>
      {logged ? (
        <Menu.Item
          key="2"
          onClick={this.handleLogout}
          style={{ float: "right" }}
        >
          Logout
        </Menu.Item>
      ) : (
        args.showLogin && (
          <Menu.Item key="2" onClick={handleLogin} style={{ float: "right" }}>
            Log in
          </Menu.Item>
        )
      )}
      {args.menuItems &&
        args.menuItems.map((item, index) => {
          return <Menu.Item key={3 + index}>{item.label}</Menu.Item>;
        })}
    </Menu>
  );
};

interface LayoutProps {
  loggedRequired?: boolean;
  rolesRequired?: string[];
  header?: HeaderProps;
  children: React.Component;
}

export const AdminLayout: React.FunctionComponent<LayoutProps> = (props) => {
  const args: AllPropsRequired<LayoutProps> = {
    loggedRequired: true,
    rolesRequired: ["admin", "requester"],
    header: {},
    ...props,
  };

  const { logged, roles } = React.useContext(appContext);

  const renderContentForbidden = (reason: string) => {
    const error_pages = {
      not_logged: {
        msg: "You must be logged in to access this page.",
        btn: "Log in",
        act: () => {
          window.location.replace(Constants.admin.login_url);
        },
      },
      roles: {
        msg: 'A role of "admin" or "requester" is required to access the admin panel. Please contact an administrator to request access',
        btn: false,
      },
      default: {
        msg: "Sorry, you are not authorized to access this page.",
        btn: false,
      },
    };

    const page = error_pages[reason] || error_pages["default"];

    return (
      <Result
        status="403"
        title="403"
        subTitle={page.msg}
        extra={
          page.btn && (
            <Button type="primary" onClick={page.act}>
              {page.btn}
            </Button>
          )
        }
      />
    );
  };

  return (
    <Layout>
      <AdminHeader {...args.header} />
      <Layout>
        {(() => {
          if (Constants.admin.unsafe_mode_on) return args.children;

          if (args.loggedRequired && !logged)
            return renderContentForbidden("not_logged");

          if (args.loggedRequired && args.rolesRequired) {
            const isAllowed =
              args.rolesRequired.filter((value) => roles.includes(value))
                .length > 0;
            if (!isAllowed) return renderContentForbidden("roles");
          }

          return args.children;
        })()}
      </Layout>
      <Footer>
        <Text style={{ float: "right", color: "#666666" }}>
          <CovfeeLogo
            style={{
              width: "1em",
              display: "inline",
              position: "relative",
              top: "0.3em",
              marginRight: "4px",
            }}
          />
          covfee ©{new Date().getFullYear()} Created by Jose Vargas
          {/* <a href="https://github.com/josedvq/covfee">covfee</a> */}
        </Text>
      </Footer>
    </Layout>
  );
};
