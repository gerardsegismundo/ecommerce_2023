import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const loginAsync = createAsyncThunk('auth/login', async ({ formData, setError }) => {
  try {
    const response = await axios.post('/auth/login', formData)
    console.log(response)
    return response.data.accessToken
  } catch (error) {
    if (error.response && error.response.data) {
      setError({ ...error, [error.response.data.name]: error.response.data.message })
    }

    console.log(error)
  }
})

const refreshAccessToken = createAsyncThunk('auth/access_token', async () => {
  try {
  } catch (error) {}
})

const getCurrentUser = createAsyncThunk('auth/current_user', async () => {
  try {
  } catch (error) {}
})

const logoutAsync = createAsyncThunk('auth/logout', async () => {
  const response = await axios.post('/auth/logout')
  return response.data
})

export { loginAsync, logoutAsync, refreshAccessToken, getCurrentUser }
