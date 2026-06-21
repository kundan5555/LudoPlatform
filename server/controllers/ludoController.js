const ludoService = require("../services/ludoService");

exports.generateRoom = async (req, res) => {

    try {

        const roomData = await ludoService.generateRoomCode();

        res.status(200).json(roomData);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Unable to generate room"
        });
    }

};