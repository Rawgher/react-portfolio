import React from "react";
import "./Nav.css";
import logo from "./nav-image/letter-r.svg";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import NoSsr from "@material-ui/core/NoSsr";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired
// };

// function LinkTab(props) {
//   return (
//     <Tab component="a" onClick={event => event.preventDefault()} {...props} />
//   );
// }

// class NavTabs extends React.Component {
//   state = {
//     value: 0
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     const styles = {
//       tabPosition: {
//         right: "-65%"
//       },
//       logoPosition: {
//         right: "-5%"
//       }
//     };
//     return (
//       <NoSsr>
//         <div>
//           <AppBar position="absolute">
//             <Tabs value={value} onChange={this.handleChange}>
//               <LinkTab label="R" href="/" style={styles.logoPosition} />
//               <LinkTab label="About" href="/About" style={styles.tabPosition} />
//               <LinkTab
//                 label="Contact"
//                 href="/Contact"
//                 style={styles.tabPosition}
//               />
//             </Tabs>
//           </AppBar>
//         </div>
//       </NoSsr>
//     );
//   }
// }

class NavTabs extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <div>
                <img src={logo} alt="R-Logo" className="maxSize" />
                {/* thank you Freepik from Flaticon.com for the logo */}
              </div>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavTabs;
