import React, { useState } from 'react';
import StudyAttendanceComponent from './StudyAttendanceComponent';
import { Outlet } from 'react-router-dom';


const StudyAttendanceContainer = () => {
    // const [isOpen, setIsOpen] = useState(true);
    
    return (
        <div>
            <StudyAttendanceComponent />
            <Outlet />
        </div>
    );
};

export default StudyAttendanceContainer;