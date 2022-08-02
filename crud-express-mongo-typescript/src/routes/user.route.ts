//import { Router } from 'express';
//import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.controller';
//
//const userRoute = () => {
//  const router = Router();
//
//  router.post('/users', createUser);
//
//  router.get('/users', getAllUsers);
//
//  router.get('/users/:id', getUser);
//
//  router.patch('/users/:id', updateUser);
//
//  router.delete('/users/:id', deleteUser);
//
//  return router;
//};
//
//export { userRoute };
import express from 'express';
import { getUsers, createUser, findUser, updateUser, deleteUser, findByName } from '../controllers/user.controller';
import { body } from 'express-validator';
import { logout } from '../controllers/auth.controller';

const router = express.Router();

router
    .route("/")
    .get(getUsers)
    .post(
        [
            body("name").notEmpty().withMessage("Email must note be empty"),
            body("email").notEmpty().withMessage("Email must note be empty")
        ],
        createUser);
    
router.route("/logout").post([], logout);

router.
    route("/search")
    .post(findByName)

router
    .route("/:id")
    .post(findUser)
    .put(updateUser)
    .delete(deleteUser)
export default router;