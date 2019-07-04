import {Router,Request,Response} from 'express';


 const router = Router();


router.get('/mensajes', (req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje:'Listo'
    })
});

router.post('/mensajes', (req:Request, res:Response)=>{
    const cuerpo = req.body;
    res.json({
        ok:true,
        cuerpo
    })
});

router.post('/mensajes/:id', (req:Request, res:Response)=>{
    const id = req.params.id;
    console.log(req.query)
    res.json({
        ok:true,
        id
    })
});


export default router

