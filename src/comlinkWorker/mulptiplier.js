export const Mulptiplier = {

    async getMultiplication(number1, number2) {
        console.log(`Inside worker. number1 = ${number1} and number2 = ${number2}`);
        return number1 * number2;
    },
};
export default Mulptiplier;