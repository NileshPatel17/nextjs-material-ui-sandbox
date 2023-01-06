import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import SettingsIcon from '@mui/icons-material/Settings';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

export const items = [
  { name: 'home', label: 'Home', Icon: HomeIcon },
  {
    name: 'billing',
    label: 'Billing',
    Icon: ReceiptIcon,
    items: [
      { name: 'statements', label: 'Statements', onClick },
      { name: 'reports', label: 'Reports', onClick },
    ],
  },
  'divider',
  {
    name: 'settings',
    label: 'Settings',
    Icon: SettingsIcon,
    items: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance', onClick },
      'divider',
      {
        name: 'notifications',
        label: 'Notifications',
        Icon: NotificationsIcon,
        items: [
          { name: 'email', label: 'Email', onClick },
          {
            name: 'desktop',
            label: 'Desktop',
            Icon: DesktopWindowsIcon,
            items: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' },
            ],
          },
          { name: 'sms', label: 'SMS' },
        ],
      },
    ],
  },
];
