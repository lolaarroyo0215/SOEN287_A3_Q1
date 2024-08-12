
//A)
function findSummation(N = 1){
    if(typeof N !== 'number' || N <= 0){
        return false;
    }
    let sum = (N * (N + 1)) / 2;
    return sum;
}
console.log(findSummation(8));

//B)
function uppercaseFirstandLast(string){
    //handle empty string
    if(!string) return '';

    //split input into words
    const words = string.trim().split(/\s+/);
    console.log("words: " + words);

    const capitalizedWords = words.map(word => {
        if(word.length === 1){
            return word.toUpperCase();
        }
        let chars = word.split('');
        chars[0] = chars[0].toUpperCase();
        chars[chars.length - 1] = chars[chars.length - 1].toUpperCase();
        return chars.join('');
    })

    return capitalizedWords.join(' ');

}
//const birthday = "lola";
const birthday = "my birthday month is february";
console.log(uppercaseFirstandLast(birthday));

//C)
function findAverageAndMedian(numbers){
    if(!Array.isArray(numbers) || numbers.length === 0){
        return{ average: null, median: null };
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    let average = sum / numbers.length;

    let sortedNums = numbers.slice().sort((a, b) => a - b);

    //calculate median
    let median;
    let mid = Math.floor(sortedNums.length / 2);
    if(sortedNums.length % 2 === 0){
        median = (sortedNums[mid - 1] + sortedNums[mid]) / 2;
    } else {
        median = sortedNums[mid];
    }
    console.log(numbers);
    return {average,median};
}
const numbers = [2,3,8,12,10];
console.log(findAverageAndMedian(numbers));

//D) string of numbers seperated by spaces
function find4Digits(nums){
    let fourdigit = '';
    if(typeof nums === 'string'){
        nums = nums.trim().split(' ');
        console.log(nums);
        if(nums.length >= 4){
            fourdigit = nums[0] + nums[1] + nums[2] + nums[3];
            console.log(fourdigit);
        } else if(nums.length < 4 && nums.length > 0){
            for(let i = 0; i < nums.length; i++){
                fourdigit += nums[i];
            }
        } else{
            fourdigit = false;
        }
        return fourdigit;
    }
}
const digitString = '2 3 5 6 1';
const digitString2 = '2 5 7';
console.log(find4Digits(digitString2));