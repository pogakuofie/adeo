import { useContext } from 'react';

// Context
import CourseContext from '../context/';

const useCourse = () => {
    const courseStore = useContext(CourseContext);

    return courseStore;
};

export default useCourse;
