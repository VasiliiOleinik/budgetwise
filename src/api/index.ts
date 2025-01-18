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

export async function getBudgetById({ queryKey }) {
  const [, id] = queryKey

  const { data } = await axios.get(`budgets/get-budget/${id}`)

  console.log('datadata', data)

  return data.budget
}

export async function editBudget({ id, budgetData }) {
  const { data } = await axios.put(`budgets/edit-budget/${id}`, budgetData)

  return data.budget
}

export async function deleteBudget(id) {
  const { data } = await axios.delete(`budgets/delete-budget/${id}`)

  return data
}
