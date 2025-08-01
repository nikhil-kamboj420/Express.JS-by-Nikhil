import path from 'path';
export const getRegisterPage = (req, res) => {
    const file = path.join(`${import.meta.dirname}`, '../views/register.html');
    res.sendFile(file, (err) => {
        if (err) {
            res.status(500).send("Error loading register page: " + err.message);
        }
    });
};

export const getLoginPage = (req, res) => {
    const file = path.join(`${import.meta.dirname}`, '../views/login.html');
    res.sendFile(file, (err) => {
        if (err) {
            res.status(500).send("Error loading login page: " + err.message);
        }
    });
};