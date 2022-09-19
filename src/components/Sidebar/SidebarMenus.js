import SidebarMenu from 'react-bootstrap-sidebar-menu';

const SidebarMenus = () => {
    return (
        <SidebarMenu
                     expand="lg"
                     hide="md">
          <SidebarMenu.Body>
              <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                      <SidebarMenu.Nav.Title>
                        
                      </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
          </SidebarMenu.Body>
        </SidebarMenu>
    );
};

export default SidebarMenus;