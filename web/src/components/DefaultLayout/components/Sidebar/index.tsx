import * as Popover from "@radix-ui/react-popover";
import { SidebarContainer, SidebarHeader, SidebarContent, Profile, UserProfile, PopoverContent, PopoverArrow, PopoverItem } from "./styles";
import logo from '../../../../assets/logo.png'
import profilepic from '../../../../assets/profile-pic.png'
import profileoptions from '../../../../assets/profile-options.png'
import { Menu } from "./components/Menu";
import { GearSix, SignOut, User } from "phosphor-react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/auth-slice";
import { useAppSelector } from "../../../../store";

export function Sidebar() {

  const dispatch = useDispatch()
  const {salespersonName} = useAppSelector(store => store.auth)

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
              <h3>{salespersonName}</h3>
              <span>Admin</span>
            </div>
          </UserProfile>
          <Popover.Root>
            <Popover.Trigger asChild>
              <img src={profileoptions} alt="User"/>
            </Popover.Trigger>
            {/* <Popover.Anchor /> */}
            <Popover.Portal>
              <PopoverContent>
                <PopoverItem>
                  <User />
                  <span>Perfil</span>
                </PopoverItem>
                <PopoverItem>
                  <GearSix />
                  <span>Configurações</span>
                </PopoverItem>
                <PopoverItem
                  onClick={() => dispatch(logout())}
                >
                  <SignOut />
                  <span>Sair</span>
                </PopoverItem>
                <PopoverArrow />
              </PopoverContent>
            </Popover.Portal>
          </Popover.Root>
          
        </Profile>
        <Menu />
      </SidebarContent>
    </SidebarContainer>
  );
}