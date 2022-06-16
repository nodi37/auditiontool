module.exports.sliceArray = (array, skip, limit, maxQueryCount) => {

    const skipInt = parseInt(skip);
    const limitInt = parseInt(limit);

    const sliceStartValue = !!skipInt?skipInt:0;
    const sliceEndValue = (!!limitInt && limitInt<maxQueryCount)?limitInt:maxQueryCount;

    return array.slice(sliceStartValue, sliceStartValue+sliceEndValue);
}