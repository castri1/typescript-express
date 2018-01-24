import { Router, Request, Response, Next } from 'express';
const router: Router = new Router();

router.get('/', (req: Request, res: Response, next) => {
    res.send("Hello");
});

router.get('/:hello', (req, res, next) => {
    res.send(req.params.hello);
});

export const UsersController: Router = router;