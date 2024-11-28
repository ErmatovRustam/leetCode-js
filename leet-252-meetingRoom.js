var canAttendMeetings = function(intervals) {
    let obj = {};
    for(meeting of intervals){
        for(let i = meeting[0]; i < meeting[1]; i++){
            obj[i] = (obj[i] || 0) + 1
            if(obj[i] > 1) return false
        }
    }

    return true
};