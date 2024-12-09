import axios from "axios";

export async function getAllCryptBudget() {
    try {
        const {data} = await axios.get('/api/v1/budgets/all-crypto-budget')

        return data.budget
    } catch (error) {
        console.error(error);
    }
}