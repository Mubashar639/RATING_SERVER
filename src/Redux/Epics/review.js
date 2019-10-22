import {
    reviewAdd,
    reviewfailed
} from "../Actions/authentication";


import { baseUrl } from "../../shared";
export const CreateReview = creds => dispatch => {
    const token = localStorage.getItem("token");
    if (!token) { return alert("Please login first ") }
    debugger;
    baseUrl
        .post('product/' + creds.pid + '/review', { rating: creds.rating, user: creds.user }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            if (res.status === 201) {
                console.log(res.data)
                dispatch(reviewAdd(res.data.food));
            } else {

                // console.log(res)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(reviewfailed("Some thing went wrong"));

        });
};
