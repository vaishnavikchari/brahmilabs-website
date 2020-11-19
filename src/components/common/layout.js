import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import '../../assets/sass/main.scss';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            image,
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'We are a digital agency. We help small and medium businesses redefine themselves in the digital world',
            },
            {name: 'keywords', content: 'web development, digital agency'},
            {
              property: 'og:image',
              content: data.site.siteMetadata.image,
            },
            {property: 'og:title', content: data.site.siteMetadata.title},
            {property: 'og:type', content: 'website'},
            {property: 'og:url', content: 'https://www.brahmilabs.in'},
            {
              property: 'og:description',
              content: 'We are a digital agency. We help small and medium businesses redefine themselves in the digital world',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>{children}</div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
