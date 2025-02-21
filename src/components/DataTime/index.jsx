import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

import styles from './DataTime.module.scss';

function DataTime () {
    const [timeOfDay, setTimeOfDay] = useState(new Date());
    const [isFullTime, setIsFullTime] = useState(false);

    useEffect(() => {
        setInterval(addSeconds, 1000);
    }, []);

    const addSeconds = () => {
        setTimeOfDay(timeOfDay => {
            timeOfDay = new Date();
            return timeOfDay;
        });
    };

    const timeHandler = () => {
        setIsFullTime(isFullTime => !isFullTime);
    };
    return (
        <>
            <div className={styles.dataTime}>
                {/* <label>
                    <span>{isFullTime ? '24' : '12'}</span>
                    <input
                        type='checkbox'
                        checked={isFullTime}
                        onChange={timeHandler}
                    />
                </label> */}
                {isFullTime ? (
                    <div className={styles.dataTimeContainer}>
                        <div className={styles.timeContainer}>
                            {format(timeOfDay, 'H:mm:ss')}
                        </div>
                        <div className={styles.dateContainer}>
                            {format(timeOfDay, 'dd.MM.yyyy')}
                        </div>
                    </div>
                ) : (
                    <div className={styles.dataTimeContainer}>
                        <div className={styles.timeContainer}>
                            {format(timeOfDay, 'hh:mm:ss aa')}
                        </div>
                        <div className={styles.dateContainer}>
                            {format(timeOfDay, 'MM.dd.yyyy')}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default DataTime;
