import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.jpg';
import config from '../../config';
import OffClickWrapper from './OffClickWrapper';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
      ],
      showNav: true
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false)
  }

  onResize() {
    if (window.innerWidth <= 995) {
      this.hideNav();
    } else {
      this.setState({ showNav: true });
    }
  }

  toggleNav() {
    this.setState(prevState => ({ showNav: !prevState.showNav }));
  }

  hideNav() {
    this.setState({ showNav: false });
  }

  render() {
    const { showNav, tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {showNav &&
          <div className="navbar-collapse" id="navbarSupportedContent">
            <OffClickWrapper onOffClick={this.hideNav}>
              <Scrollspy
                items={tabs.map(s => s.href)}
                currentClassName="active"
                offset={-300}
                className="navbar-nav"
              >
                {tabs.map((tab, i) => {
                  const { href, content } = tab;
                  return (
                    <li className="nav-item" key={href}>
                      <Scroll type="id" element={href}>
                        <a className="nav-link" href={`#${href}`}>
                          {content}
                        </a>
                      </Scroll>
                    </li>
                  );
                })}
              </Scrollspy>
            </OffClickWrapper>
          </div>
        }
      </nav>
    );
  }
}

export default Sidebar;
