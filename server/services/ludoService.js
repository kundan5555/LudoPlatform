const axios = require("axios");

exports.generateRoomCode = async () => {

    try {

        const response = await axios.get(
            "https://ludo-king-api-room-code.p.rapidapi.com/roomCode",
            {
                headers: {
                    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
                    "X-RapidAPI-Host": process.env.RAPID_API_HOST
                }
            }
        );

        return response.data;

    } catch (error) {

        throw error;
    }
};