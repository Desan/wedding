import { Request, Response, NextFunction } from "express"

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.authenticated) {
        return next()
    }
    res.redirect('/login')
}
