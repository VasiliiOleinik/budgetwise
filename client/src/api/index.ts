import axios from 'axios'

export async function getAllCryptBudget() {
  try {
    const { data } = await axios.get('budgets/all-crypto-budget')

    return data.budget
  } catch (error) {
    console.error(error)
  }
}

export async function login(data) {
  await axios.post('auth/login', data)
}

export async function addBudget(data) {
  await axios.post('budgets/add-budget', data)
}

export async function getBudgets() {
  const { data } = await axios.get('budgets/get-budgets')

  return data.budget
}
