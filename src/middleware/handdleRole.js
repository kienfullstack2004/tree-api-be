

modules.exports.veriCode = async (req, res, next) => {

    const { role_code } = req.user;

    if (role_code === 'Admin') {
        return res.send('Admin');
    } else {
        next();
    }
}