module.exports={
    dateToUnix :(date)=>{
    const epoch = new Date(date).getTime()/1000
    return epoch
},

UnixToDate:(millisecs) =>{
    const unixTimeInMilliSecs = millisecs*1000
    const date = new Date(unixTimeInMilliSecs) 
    return date
}
}
