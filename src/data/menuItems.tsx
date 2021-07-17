import { MenuItem } from '../interfaces/interfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animaciones 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animaciones 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Swiches',
        icon: 'toggle-outline',
        component: 'SwichScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'TextInput',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull To Refresh',
        icon: 'refresh-circle-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Section list',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite Scroll',
        icon: 'infinite-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'map-outline',
        component: 'SlidesScreens'
    },
    {
        name: 'Theme',
        icon: 'moon-outline',
        component: 'ChangeThemeScreen'
    },
]