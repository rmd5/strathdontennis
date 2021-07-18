import axios from "axios"

async function create_booking(name, date, duration) {
    return await axios.post(process.env.REACT_APP_API_URL + "/create_booking", {
        name: name,
        date: date,
        duration: duration
    })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

export default create_booking