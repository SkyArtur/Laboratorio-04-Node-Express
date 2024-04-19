const path= require('path');

module.exports = app => {
    const home = async (req, res) => {
        res.sendFile(path.join(process.cwd(), '/index.html'));
    }
    return { home }
}