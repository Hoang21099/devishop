import React from 'react';

import './homepage.styles.scss';

//Component
import DirectoryMenu from '../components/directory-menu/directory-menu.component';
const HomePage = ()=>(
    <div className="Homepage">
        <DirectoryMenu></DirectoryMenu>
    </div>
);

export default HomePage;