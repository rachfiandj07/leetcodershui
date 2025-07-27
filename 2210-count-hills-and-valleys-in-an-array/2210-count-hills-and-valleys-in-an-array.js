/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let dedup = []
    for ( let i = 0; i<nums.length; i++) {
        if (nums[i + 1] !== nums[i]) {
            dedup.push(nums[i])
        }
    }
    let count = 0
    for ( let i = 0; i<dedup.length; i++ ) {
        const c = dedup[i]
        if (
            dedup[i - 1] && dedup[i + 1]
            && c > dedup[i - 1] && c > dedup[i + 1]
        ) {
            count += 1
        } else if (
            dedup[i - 1] && dedup[i + 1]
            && c < dedup[i - 1] && c < dedup[i + 1]
        ) {
            count += 1
        }
    }

    return count
};