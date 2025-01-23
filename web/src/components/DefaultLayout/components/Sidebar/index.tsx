import { SidebarContainer, SidebarHeader, SidebarContent, Profile, UserProfile } from "./styles";
import logo from '../../../../assets/logo.png'
import profilepic from '../../../../assets/profile-pic.png'
import profileoptions from '../../../../assets/profile-options.png'
import { Menu } from "./components/Menu";

export function Sidebar() {
  
  return (
    <SidebarContainer>
      {/* Header */}
      <SidebarHeader>
        <div>
          <img src={logo} alt="Grupo Farma" />
        </div>
        <h2>Grupo Farma</h2>
      </SidebarHeader>

      <SidebarContent>
        {/* Profile */}
        <Profile>
          <UserProfile>
            <img src={profilepic} alt="User"/>
            <div>
              <h3>Isac</h3>
              <span>Admin</span>
            </div>
          </UserProfile>
          <img src={profileoptions} alt="User"/>
        </Profile>
        <Menu />
      </SidebarContent>
    </SidebarContainer>
  );
}