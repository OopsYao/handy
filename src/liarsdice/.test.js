import getDistribution from './index';

const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const go = (dice, expDist, note, wild = true) => {
    test(note, () => {
        expect(arraysEqual(expDist, getDistribution(dice, wild))).toBe(true)
    })
}

go([1, 2, 3, 4, 5], [1, 2, 2, 2, 2, 1], 'Flush dice')
go([1, 1, 3, 4, 1], [3, 3, 8, 8, 3, 3], 'Many 1s with wild')
go([1, 1, 3, 4, 1], [3, 0, 1, 1, 0, 0], 'Many 1s without wild', false)

