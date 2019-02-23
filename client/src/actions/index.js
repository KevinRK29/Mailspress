import axios from "axios";
import { FETCH_USER } = "./types";

const fetchUser = () => {
    axios.get("/api/current_user");
}