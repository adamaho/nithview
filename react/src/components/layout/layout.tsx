import * as React from 'react';

export interface LayoutComponent extends React.FunctionComponent {
  Header: React.FunctionComponent;
  Content: React.FunctionComponent;
  Footer: React.FunctionComponent;
}

const Header: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-layout-header>
      {children}
    </nv-layout-header>
  );
};

const Content: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-layout-content>
      {children}
    </nv-layout-content>
  );
};

const Footer: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-layout-footer>
      {children}
    </nv-layout-footer>
  );
};

export const Layout: LayoutComponent = ({
  children
}) => {
  return (
    <nv-layout>
      {children}
    </nv-layout>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;


