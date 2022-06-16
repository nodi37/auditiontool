const data = require('./data');

module.exports.byId = (async id => {
    return new Promise((resolve, reject) => {
        if (id) {
            const res = data.users.filter(obj => obj.id===id);
            resolve(res)
        } else {
            resolve(data.users);
        }
    })
});

module.exports.byName = (async name=>{
    return new Promise((resolve, reject)=>{
        if(name) {
            const res = data.users.filter(obj=> obj.name.toLowerCase().includes(name.toLowerCase()));
            resolve(res)
        } else {
            resolve(data.users)
        }
    })
});