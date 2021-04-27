/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    return binarySearch(numbers, target, 0, numbers.length - 1);
};

const binarySearch = (numbers, target, left, right) => {
    if (numbers[left] + numbers[right] === target) {
        return [left + 1, right + 1];
    }

    const mid = Math.floor((left + right) / 2);
    
    if (numbers[mid] > target) {
        return binarySearch(numbers, target, 0, mid - 1);
    }

    for (let i = 0; i < numbers.length; ++i) {
        if (i === mid) {
            continue;
        }

        if (target === numbers[i] + numbers[mid]) {
            if (i < mid) {
                return [i + 1, mid + 1];
            } else {
                return [mid + 1, i + 1];
            }
        }
    }

    return binarySearch(numbers, target, mid + 1, right);
};

console.log(twoSum(
    [3,3,5,8,18,21,22,22,22,24,26,28,29,31,31,34,37,37,40,43,43,43,44,47,48,51,51,51,52,54,55,56,59,59,60,74,74,76,76,81,82,82,82,85,89,91,91,94,99,101,101,106,116,118,121,126,127,128,128,128,131,134,135,138,140,143,145,151,152,153,154,156,158,158,158,160,169,173,174,177,178,180,189,190,190,191,191,196,197,203,203,206,206,206,208,210,212,215,216,218,218,219,223,225,227,229,232,232,233,234,235,235,236,237,238,239,245,249,250,251,254,254,256,260,261,262,270,271,271,274,275,284,285,286,290,290,291,292,292,293,293,293,295,299,300,304,304,305,310,313,313,315,322,326,327,329,334,336,337,339,339,340,341,343,344,347,347,356,356,359,359,361,364,364,368,368,369,376,378,380,380,380,386,387,389,391,391,397,399,404,405,413,415,418,418,423,426,428,429,430,432,434,437,439,459,460,461,461,463,472,479,480,484,484,486,487,492,494,498,499,500,501,501,504,505,505,507,513,517,517,519,519,522,525,525,529,530,530,533,536,537,538,539,542,544,553,557,561,561,564,567,568,568,570,570,572,574,575,575,579,580,581,582,590,591,594,594,597,600,605,607,608,611,614,615,615,619,621,622,623,626,627,628,630,631,632,634,638,640,641,642,648,648,649,659,662,668,673,678,678,682,682,683,683,686,686,687,691,692,693,698,700,700,706,711,711,712,714,714,718,722,727,730,730,733,733,741,744,745,747,749,754,755,755,758,760,762,763,764,769,770,771,771,776,777,784,785,789,790,792,795,795,796,797,798,806,806,806,809,812,813,815,819,820,823,827,830,837,840,843,848,850,851,851,852,857,858,858,859,861,863,866,869,869,873,874,874,883,885,887,889,891,893,899,901,903,905,905,905,909,912,917,919,920,921,922,926,935,940,941,944,945,946,947,948,950,950,951,952,956,956,959,962,964,965,968,970,971,971,972,973,976,978,982,983,985,985,988,989,991,994,994,995,995,997,997]
    , 101))