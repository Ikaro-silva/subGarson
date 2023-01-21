const jwt = require('jsonwebtoken')
const secret=require('../configs/db.config')

function authenticate(req, res, next) {

    const token = req.body.headers['Authorization'];
    

    if (!token) {
      return res.status(401).send('Não autorizado');
    }

    try {
      const decoded = jwt.verify(token,secret.configToken.secretUser);
      req.user = decoded;

      next();

    } catch (error) {
      res.status(401).send('Falha na autencação');
    }
}

module.exports=authenticate