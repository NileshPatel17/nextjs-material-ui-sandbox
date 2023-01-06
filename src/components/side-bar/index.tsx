import React from 'react';

import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Collapse, List, ListItem } from '@mui/material';

import { items } from './data';

function SidebarItem({
  depthStep = 10,
  depth = 0,
  expanded = true,
  item,
  ...rest
}) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  }

  return (
    <>
      <ListItem
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <Box
          sx={{
            paddingLeft: depth * depthStep,
            whiteSpace: 'nowrap',
            textVverflow: 'ellipsis',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {Icon && <Icon sx={{ marginRight: '6px', fontSize: 'small' }} />}
          <Box
            sx={{ width: '100%', border: '0px solid blue', padding: '4px 0' }}
          >
            {label}
          </Box>
        </Box>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === 'divider' ? (
                  <Divider style={{ margin: '6px 0' }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

function Sidebar() {
  return (
    <Box
      sx={{
        maxWidth: '240px',
        height: '100vh',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem
                depthStep={sidebarItem.depthStep}
                depth={sidebarItem.depth}
                expanded={sidebarItem.expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
