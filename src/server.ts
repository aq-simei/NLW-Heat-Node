import { io, serverHttp } from "./app";


serverHttp.listen(4000, () => console.log(`✔️ Server is running on port 4000`));

export {serverHttp, io};