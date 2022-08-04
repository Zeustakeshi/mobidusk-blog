import React from "react";
import Button from "../../component/Button";

const NotFoundPage = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="p-10 w-full max-w-[1000px] h-full max-h-[600px] shadow-2xl rounded-2xl flex justify-center items-center gap-5">
                <div className="flex-1 flex justify-center items-center">
                    <div className="p-3 flex flex-col justify-center items-center bg-slate-100 rounded-full w-[300px] h-[300px] font-bold">
                        <div className="text-8xl text-slate-200 ">404</div>
                        <div className="text-slate-300">Page Not Found</div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-8 justify-center items-center">
                    <div className="text-6xl text-primary font-bold">Oops!</div>
                    <p className="p-0 m-0 uppercase font-bold">
                        Page not found in server
                    </p>
                    <p className="text-center text-base font-semibold text-slate-400">
                        This link your followed is either outdated, inaccurate,
                        or the server has been instructed not to let you have it
                    </p>
                    <Button
                        type="button"
                        className="max-w-[200px] text-lg font-bold"
                        to="/"
                    >
                        Go to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
