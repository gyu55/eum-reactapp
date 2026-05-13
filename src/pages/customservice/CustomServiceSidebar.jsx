import React from 'react';
import { styles } from './style';
import CustomServiceTabMenu from './CustomServiceTabMenu';

const CustomServiceSidebar = () => {
    return (
        <aside style={styles.sidebar}>
            <CustomServiceTabMenu />
        </aside>
    );
};

export default CustomServiceSidebar;
