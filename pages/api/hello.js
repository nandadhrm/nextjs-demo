// req = HTTP incoming message, res = HTTP server response
const handler = (req, res) => {
    res.status(200).json({text: "Hello There"})
}

export default handler