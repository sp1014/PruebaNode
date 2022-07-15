const {Router} = require('express');
const router = Router();
const BD = require('../config/config');




router.get('/',(req, res) => {
    res.status(200).json({
        message: "ruta satus 200"
    });

});

router.get('/users',async (req, res) => {
 const users=[];
    sql="select * from users";
    let result = await BD.Open(sql,[],false);
    console.log(result.rows);
    console.log(users);
    result.rows.map(person =>{
        let userSchema ={
            "ID": person[0],
            "NOMBRES": person[1],
            "APELLIDOS": person[2],
            "TELEFONOS": person[3],
            "DIRECCIONES": person[4],
            "ARCHIVOS": person[5]
        }
        users.push(userSchema)
    })
    res.json({users});
});

//CREATE

router.post('/addUser', async (req, res) => {
    const { Nombres,Apellidos,Telefonos,Direcciones,Archivos } = req.body;

    
        sql = "insert into users(Nombres,Apellidos,Telefonos,Direcciones,Archivos) values (:Nombres,:Apellidos,:Telefonos,:Direcciones,:Archivos)";

    await BD.Open(sql, [Nombres,Apellidos,Telefonos,Direcciones,Archivos], true);

    res.status(200).json({
      
        "Nombres": Nombres,
        "Apellidos": Apellidos,
        "Telefonos": Telefonos,
        "Direcciones": Direcciones,
        "Archivos": Archivos,

    })

})

module.exports= router;