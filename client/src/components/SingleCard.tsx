import {
    AppBar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import MenuIcon from "@mui/icons-material/Menu";
  import ClearIcon from '@mui/icons-material/Clear';
  
  
  export default function Header() {
    const [active, setActive] = useState(0);
    const [toggle, setToggle] = useState(false);
  
  
    return (
      <AppBar color="inherit" className="" position="fixed">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="container mx-auto py-5 px-10"
        >
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <NavLink to={"/"}><img src="logo.svg" alt="Logo" /></NavLink>
            <NavLink
              className={`hidden md:block nav-link  ${
                active === 1 ? "nav-link-active" : ""
              }`}
              to={"/menu"}
            >
              <button onClick={() => setActive(1)}>Menu</button>
            </NavLink>
            <NavLink
              className={`hidden md:block nav-link  ${
                active === 2 ? "nav-link-active" : ""
              }`}
              to={"/rewards"}
            >
              <button onClick={() => setActive(2)}>Rewards</button>
            </NavLink>
            <NavLink
              className={`hidden md:block nav-link  ${
                active === 3 ? "nav-link-active" : ""
              }`}
              to={"/gift"}
            >
              <button onClick={() => setActive(3)}>Gift Cards</button>
            </NavLink>
          </Stack>
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <NavLink
              className={`hidden md:block nav-link   ${
                active === 4 ? "nav-link-active" : ""
              }`}
              to={"/"}
            >
              <button onClick={() => setActive(4)} className="mr-6">
                <LocationOnIcon />
                Find a store
              </button>
            </NavLink>
            <NavLink to={'/'}>
            <button
                onClick={() => setActive(6)}
                className="rounded-3xl border py-2 px-4 text-sm"
              >
                Sign in
              </button>
            </NavLink>
            <NavLink to={'/'}>
            <div
                onClick={() => setActive(7)}
                className="rounded-3xl border py-2 px-4 text-sm bg-black text-white"
              >
                Join now
              </div>
            </NavLink>
  
  
            {/* mobile */}
            <div className="block md:hidden  right-0 " >
              <Button onClick={() => setToggle(!toggle)}>
                {toggle?   <ClearIcon className="text-[#00754a]" /> : <MenuIcon className="text-[#00754a]" />} 
              </Button>
              <Drawer
              
                sx={{ width: "80%", height: "100vh" }}
                anchor={"right"}
                open={toggle}
                onClose={() => setToggle(!toggle)}
              >
                <List sx={{ width: "400px" }} >
                  <Stack
                    sx={{ padding: "2rem" }}
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={() => setToggle(!toggle)}
                  >
                    <NavLink className={"  hover:text-[#00754a]"} to={"/menu"}>
                      Menu
                    </NavLink>
                    <NavLink className={" hover:text-[#00754a]"} to={"/rewards"}>
                      Rewards
                    </NavLink>
                    <NavLink className={" hover:text-[#00754a]"} to={"/gift"}>
                      Gift Cards
                    </NavLink>
                  </Stack>
                  <hr className="mx-5" />
                  <Stack sx={{ padding: "10px" }}>
                    <Stack spacing={2} direction={"row"}>
                      <NavLink className={'rounded-3xl border py- px-4 text-sm'} to={"/acount/signin"}>Sign in</NavLink>
                      <NavLink className={'rounded-3xl border py-2 px-4 text-sm bg-black text-white'} to={"/acount/create"}>Join now</NavLink>
                    </Stack>
                    <NavLink className={" hover:text-[#00754a]"} to={"/"}>
                      <Typography sx={{ paddingTop: "10px" }}>
                        <LocationOnIcon />
                        Find a store
                      </Typography>
                    </NavLink>
                  </Stack>
                </List>
              </Drawer>
            </div>
          </Stack>
        </Stack>
      </AppBar>
    );
  }
  