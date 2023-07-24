import React, { useState } from 'react';
import styles from './FrameComponent.module.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
    MenuOutlined,
    CloseOutlined
   
  } from '@ant-design/icons';
 



const Home = () => {return(<div>Home Page</div>)};
const Scorecards = () => {return(<div>Scorecards Page</div>)};
const Dashboards = () => <div>Dashboards Page</div>;
const Integrations = () => <div>Integrations Page</div>;
const ConnectMetrics = () => <div>Connect Metrics Page</div>;
const Reports = () => <div>Reports Page</div>;

const MenuComponent = () => {
    const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the bar is expanded or collapsed

  // Toggle function to switch between expanded and collapsed states
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    
  };
const handleMenuItems = () =>{
    alert("clicked on Home");
}
  // JSX for the options that appear when the bar is expanded
  const expandedOptions = (
    <div className={styles.nav}>
      <div className={styles.bottom}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <div className={styles.headerLogo}>
              <div className={styles.headerLogo}>
                <b className={styles.vncDesigner}>VNC Designer</b>
              </div>
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper241.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1} >
                  <Link to="/" className={styles.navItems}>Home</Link></div>
                  
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper31.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem} >
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper25.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                  <Link to="/scorecards" className={styles.navItems}>Scorecards</Link>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper31.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper26.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                  <Link to="/dashboards" className={styles.navItems}>Dashboards</Link>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper8.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                  <Link to="/integrations" className={styles.navItems}>Integrations</Link>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper28.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                  <Link to="/connect-metrics" className={styles.navItems}>Connect Metrics</Link>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper29.svg"
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                  <Link to="/reports" className={styles.navItems}>Reports</Link>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.navFeaturedCard}>
              <div className={styles.navFeaturedCard1}>
                <img
                  className={styles.lightningChargeIcon}
                  alt=""
                  src="/lightningcharge1.svg"
                />
              </div>
              <div className={styles.textAndSupportingText}>
                <b className={styles.text12} >Upgrade to Pro</b>
                <div className={styles.supportingText}>
                  Get 1 month free and unlock Pro features
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.arrow}>
                  <div className={styles.widthChangeSizeHere6}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.iconWrapperH}>
                    <div className={styles.heightChangeSizeHere6}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/iconwrapper33.svg"
                    />
                  </div>
                </div>
                <div className={styles.text13}>
                  <div className={styles.text14} >
                  <Link to="/upgradePlan" >Upgrade plan</Link></div>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.widthChangeSizeHere6}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.iconWrapperH}>
                    <div className={styles.heightChangeSizeHere6}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/iconwrapper34.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItemParent}>
              <div className={styles.verticalNavItem}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper30.svg"
                    />
                  </div>
                  <div className={styles.text}>
                    <div className={styles.text1}>
                    <Link to="/academy" className={styles.navItems}>VNCAcademy</Link></div>
                  </div>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.widthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.iconWrapperH}>
                    <div className={styles.heightChangeSizeHere}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/iconwrapper35.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalNavItem}>
                <div className={styles.wrapper}>
                  <div className={styles.icon}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper9.svg"
                    />
                  </div>
                  <div className={styles.text}>
                    <div className={styles.text1}>
                    <Link to="/collaborate" className={styles.navItems}>Collaborate</Link></div>
                  </div>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.widthChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.iconWrapperH}>
                    <div className={styles.heightChangeSizeHere}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/iconwrapper35.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.account}>
              <div className={styles.wrapper}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSupportingText1}>
                  <div className={styles.text19}>Olivia Rhye</div>
                  <div className={styles.supportingText1}>
                    olivia@untitledui.com
                  </div>
                </div>
              </div>
    </div>
    </div>
    </div>
    </div>
  );

  const collapseOptions = (
    <div className={styles.nav}>
      <div className={styles.bottom}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <div className={styles.headerLogo}>
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper241.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper31.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem} >
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper25.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper31.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem} >
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper26.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem} >
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper8.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper28.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalNavItem} >
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper29.svg"
                  />
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper32.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navFeaturedCard1}>
                <img
                  className={styles.lightningChargeIcon}
                  alt=""
                  src="/lightningcharge1.svg"
                />
              </div>
            <div className={styles.account}>
              <div className={styles.wrapper}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
    </div>
    </div>
    </div>

  );

  


  return (
    <div className={styles.frameParent}>
      <div className={styles.sideNavParent}>
        <div className={` ${isExpanded ? styles.sideNav : styles.sideNavCollapse}`}>
          <div className={styles.toggleBar} onClick={handleToggle}>
            {/* You can add an icon or text here to indicate expand/collapse */}
            

            
            {isExpanded ? <CloseOutlined className={styles.menu}/> : <MenuOutlined className={styles.menu}/>}
            

          </div>
           {isExpanded ? expandedOptions: collapseOptions}
      </div>
      <Routes>
            {/* Define your routes and corresponding components */}
            <Route path="/" element={<Home />} />
            <Route path="/scorecards" element={<Scorecards />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/connect-metrics" element={<ConnectMetrics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
    </div>
    </div>
  );
};

export default MenuComponent;
