import { getToken } from '../utils/sessions'

const BASE_URL = "http://localhost:3000";

const hitApiWithSignIn = async (data) => {
  try {
      console.log(JSON.stringify(data))
    const response = await fetch(`${BASE_URL}/users/sign_in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.log(error);
  }
}

const hitApiWithSignUp = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
  }
    catch (error) {
    console.log(error);
  }
}

const hitApiWithResetPassword = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/users/resetpassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    }
        catch (error) {
        console.log(error);
    }
    }

    const hitApiWithSignOut = async () => {
        try {
            const response = await fetch(`${BASE_URL}/users/sign_out`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": getToken()
                }
            });
            const json = await response.json();
            return json;
        }
        catch (error) {
            console.log(error);
        }
    }

export { hitApiWithSignIn, hitApiWithSignUp, hitApiWithResetPassword, hitApiWithSignOut };
