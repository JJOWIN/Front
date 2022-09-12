const URL = "http://43.200.200.255:8080"

export const postSignup = async (data) => {
    return fetch(`${URL}/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json());
  }

export const postLogin = async (data) => {
    return fetch(`${URL}/user/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json());
  }