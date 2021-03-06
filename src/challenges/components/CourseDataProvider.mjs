import React, {createContext, useContext} from '../../web_modules/react.js';

export const CourseDataContext = createContext();

export const useCourseData = () => useContext(CourseDataContext);

/**
 * @param children
 * @param {CourseDateConverter} courseDateConverter
 * @returns {React.ReactElement}
 * @constructor
 */
export default function CourseDataProvider({children, courseDateConverter}) {
    return <CourseDataContext.Provider value={{
        currentDayIndex: courseDateConverter.getDayIndexSinceCourseStart(),
        currentWeekIndex: courseDateConverter.getWeekIndex(), /* One-based! */
        currentWeekDeadline: courseDateConverter.getWeekDeadline(),
        hasCourseStarted: courseDateConverter.hasCourseStarted(),
        isCourseOver: courseDateConverter.isCourseOver(),
        isCourseRunning: courseDateConverter.isCourseRunning(),
        courseStartDate: courseDateConverter.getCourseStartDate(),
        weekCount: courseDateConverter.getWeekCount(),
        getDeadline: courseDateConverter.getDeadline.bind(courseDateConverter),
    }}>{children}</CourseDataContext.Provider>;
}