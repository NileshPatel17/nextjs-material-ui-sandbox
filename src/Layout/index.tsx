import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

//drawer elements used
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';

import { useSession, signIn, signOut } from 'next-auth/react';

import Sidebar from '../components/side-bar';

// nextjs
import Link from 'next/link';

const drawerWidth = 240;

const settings = ['Logout'];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: '#fff',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      // backgroundColor: theme.palette.primary.main,
    },
    content: {
      flexGrow: 1,
    },
    menuItem: {
      color: '#fff',
    },
  })
);

interface LayoutProps {
  // container: Element;
  children: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  // const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onUserMenuClick = (key: string) => {
    setAnchorElUser(null);
    if (key === 'Logout') {
      signOut();
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Box>
        {/* {MENU_ITEMS.map((item) => (
          <Link href={item.link} key={item.key}>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))} */}
        <Sidebar />
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Material UI Sandbox
            </Typography>
            {!session && (
              <Button color="inherit" onClick={handleSignin}>
                Sign in
              </Button>
            )}
            <Box sx={{ flexGrow: 0 }}>
              {session && (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={session.user.image} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => onUserMenuClick(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Box component="button">
          <Drawer
            // container={container}
            // variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
