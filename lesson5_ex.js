//=======LESSON 5 EXERCISE===========

/**
 * @param {number[]} nums 
 */

//FIND MAX IN ARRAY
function findMax (nums) {
    let max = nums[0];
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        if (max < nums[i])
            max = nums[i];
    }

    return max;
}

//--------------execute---------------
// let nums = [1,2,89,102,1,0,3];
// console.log(findMax(nums));



//BINARY SEARCH
function binarySearch (nums, target) {
    nums.sort;
    
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        // console.log(mid);

        if (target == nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

//--------------execute---------------
// let nums = [1,2,89,102,1,0,3];
//         //  0 1  2  3  4 5 6
// let target = 89;

// console.log(binarySearch(nums,target));



//BUBBLE SORT
function bubbleSort (nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) { 
        for (let j = 0; j < n - 1; j++) { 
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }//switch values
        }//the numbers of comparing pairs
    }//the numbers of iterate to finish
    return nums;
}

//--------------execute---------------
let nums = [1,2,89,102,1,0,3];
        //  0 1  2  3  4 5 6

console.log(bubbleSort(nums));