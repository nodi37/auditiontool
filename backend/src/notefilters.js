const data = require('./data');

module.exports.byKeyword = async (keyword) => {
    return new Promise((resolve, reject) => {
        if (keyword) {
            const res = data.reviewnotes.filter(obj => JSON.stringify(obj).toLowerCase().includes(keyword.toLowerCase()));
            resolve(res)
        } else {
            resolve(data.reviewnotes);
        }
    });
}

module.exports.byType = async (type) => {
    return new Promise((resolve, reject) => {
        if (type) {
            const res = data.reviewnotes.filter(obj => obj.type.toLowerCase() === type.toLowerCase());
            resolve(res)
        } else {
            resolve(data.reviewnotes);
        }
    });
}

module.exports.byPriority = async (priority) => {
    return new Promise((resolve, reject) => {
        if (priority) {
            const res = data.reviewnotes.filter(obj => obj.priority.sortKey === parseInt(priority, 10));
            resolve(res)
        } else {
            resolve(data.reviewnotes);
        }
    });
}

module.exports.byId = async (id) => {
    return new Promise((resolve, reject) => {
        if (id) {
            const res = data.reviewnotes.filter(obj => obj._id.$oid === id);
            resolve(res)
        } else {
            resolve(data.reviewnotes);
        }
    });
}