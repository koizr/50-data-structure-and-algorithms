const range = function* (start, end) {
    for (; start <= end; start++) {
        yield start;
    }
}

export { range }
