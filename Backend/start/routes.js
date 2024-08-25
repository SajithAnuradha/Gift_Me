import giftRouter from '../routes/giftRoute.js';
import userRouter from '../routes/userRoute.js';
import cartRouter from '../routes/cartRoute.js';
import orderRouter from '../routes/orderRoute.js';
import adminRouter from '../routes/adminRoute.js';
import roleFindRouter from '../routes/findRole.js';

export default (app) => {
    app.use("/api/gift", giftRouter);
    app.use("/api/user", userRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/order", orderRouter);
    app.use("/api/admin", adminRouter);
    app.use("/api/role", roleFindRouter);
};
