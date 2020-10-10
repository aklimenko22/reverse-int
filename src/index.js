module.exports = function reverse (n) {
        let str = String(n);
        let result = '';
        for (i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }
        if (result[str.length - 1] == '-') {
        return result.slice(0, result.length - 1);
        }
        return result;
    }