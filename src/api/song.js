import axios from "../utils/axios"

const getSong = async (id) => {
  try {
    return await axios.get("/song", {
        params: {
          id: id
        }
      }
    )
  } catch(err) {
    console.log(err)
  }
}

const getInfoSong = async (id) => {
  try {
    return await axios.get("/infosong", {
        params: {
          id: id
        }
      }
    )
  } catch(err) {
    console.log(err)
  }
}

export { getSong, getInfoSong }
