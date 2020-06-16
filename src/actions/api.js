import {
  requestRoutines,
  receiveRoutinesSuccess,
  receiveRoutinesError,
  accountRegisterSuccess,
  accountRegisterError,
} from './index'
import { accountLoginSuccess, accountLoginError } from './creators'

export const requestRoutinesData = () => async (dispatch) => {
  dispatch(requestRoutines())
  await fetch(process.env.PUBLIC_URL + '/data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('fetced data', data)
      dispatch(receiveRoutinesSuccess(data))
    })
    .catch((e) => {
      console.warn('data fetch error', e)
      dispatch(receiveRoutinesError('Could not fetch data'))
    })
}

// TODO: move inside config:
const API_BASE_URL = 'http://localhost:5000/api/v1'

// TODO: handle 401 and 403

/**
 * Abstraction of restful api call. The default method is GET, that can be overriden by
 * passing different method in the options
 * Body is expected to be a FormData object, might need to revise this for getters
 * @param {String} url - full url to the api endpoint
 * @param {Object} options - optional options object, use to supply body and/or switch method
 */
export function restApiCall(url, options = {}) {
  return fetch(API_BASE_URL + url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 20000,
    ...options,
  })
    .then(
      (response) => {
        if (response.status === 200 || response.status === 422) {
          return response.json().then((data) => {
            // api will return status of 'success' on good calls, oterwise it's an error
            if (!data.success) {
              return Promise.reject({
                error: data.message,
              })
            }
            return data
          })
        }

        // TODO:
        // handle additional reposnses
        // 401 - unauthorised, show error
        // 403 - expired token, this one needs to ask for a new token and repeat the original request

        // resolce as error for all other status codes
        return Promise.reject({
          error: 'Unhandled server error: ' + response.status,
        })
      },
      () => {
        // resolve as error
        return Promise.reject({ error: 'Unknown server error' })
      }
    )
    .then((json) => {
      return {
        success: true,
        data: json,
      }
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      }
    })
}

/**
 * Register new user
 * @param {*} dispatch
 * @param {*} data
 */
export async function register(dispatch, data) {
  const url = '/users/register/'
  const options = {
    method: 'POST',
    body: new URLSearchParams(data),
  }

  try {
    const response = await restApiCall(url, options)

    if (response.success) {
      dispatch(accountRegisterSuccess())
    } else {
      dispatch(accountRegisterError(response.error))
    }
  } catch (error) {
    dispatch(accountRegisterError(error))
  }
}

/**
 * Authenticate existing user
 * @param {*} dispatch
 * @param {*} data
 */
export async function authenticate(dispatch, data) {
  const url = '/users/authenticate/'
  const options = {
    method: 'POST',
    body: new URLSearchParams(data),
  }

  try {
    const response = await restApiCall(url, options)

    if (response.success) {
      dispatch(accountLoginSuccess(response.data))
    } else {
      dispatch(accountLoginError(response.error))
    }
  } catch (error) {
    dispatch(accountLoginError(error))
  }
}
