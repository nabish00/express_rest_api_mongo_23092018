 import express from 'express';

 var app = express();

 var router = express.Router();

 router.get('/', (req, res) => {
        res.send("Dummy");
 });

 export default router;