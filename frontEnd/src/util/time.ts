const timeHourMin = (time: any) => {
    time = new Date(time)
    return time.toLocaleString('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
}
const MsgTime = (time: any) => {
    if (time) {
        if (todayDate() === getDate(time)) return (timeHourMin(time)).toUpperCase();
        else return getDate(time);
    }
}
const getDate = (time: any) => {
    return (new Date(time)).toLocaleString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}
const todayDate = () => {
    return (new Date()).toLocaleString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}
const timeDiff = (uploaded: any) => {

    const today = new Date();
    uploaded = new Date(uploaded);

    // To calculate the time difference of two dates
    const Diff_In_Time = today.getTime() - uploaded.getTime();

    // To calculate the no. of sec between two dates
    const Diff_In_secs = Diff_In_Time / (1000);

    const time = {
        min: 60, hour: 60 * 60,
        day: 60 * 60 * 24,
        month: 60 * 60 * 24 * 30,
        year: 60 * 60 * 24 * 30 * 12
    }
    let secs = Math.round(Diff_In_secs), timeMsg;

    let timeDur;
    if (secs < 60) {
        timeDur = Math.round(secs);
        timeMsg = timeDur + (timeDur === 1 ? ' second' : ' seconds');
    }
    else if (secs < time.hour) {
        timeDur = Math.round(secs / time.min)
        timeMsg = timeDur + (timeDur === 1 ? ' minute' : ' minutes');
    }

    else if (secs < time.day) {
        timeDur = Math.round(secs / time.hour)
        timeMsg = timeDur + (timeDur === 1 ? ' hour' : ' hours');
    }
    else if (secs < time.month) {
        timeDur = Math.round(secs / time.day)
        timeMsg = timeDur + (timeDur === 1 ? ' day' : ' days');
    }
    else if (secs < time.year) {
        timeDur = Math.round(secs / time.month);
        timeMsg = timeDur + (timeDur === 1 ? ' month' : ' months');
    }
    else if (secs > time.year) {
        timeDur = Math.round(secs / time.year);
        timeMsg = timeDur + (timeDur === 1 ? ' year' : ' years');
    }

    return timeMsg + ' ago';
}
export { timeHourMin, timeDiff, todayDate, MsgTime };