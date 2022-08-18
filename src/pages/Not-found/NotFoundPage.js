import React from "react";
import Button from "../../component/Button";

const NotFoundPage = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className=" p-4 md:md:p-10 w-full max-w-[90vw]  md:max-w-[1000px] h-full max-h-[500px] md:max-h-[600px] shadow-2xl rounded-2xl flex flex-col md:flex-row  justify-center items-center gap-0 md:gap-5">
                <div className="mt-2 flex-1 flex justify-center items-center">
                    <div className="p-3 flex flex-col justify-center items-center bg-slate-100 rounded-full w-[150px] h-[150px] md:w-[300px] md:h-[300px] font-bold">
                        <div className="text-5xl md:text-8xl text-slate-200 ">
                            404
                        </div>
                        <div className="text-slate-300 text-sm md:text-lg">
                            Page Not Found
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-3 md:gap-8 justify-center items-center">
                    <div className="text-4xl md:text-6xl text-primary font-bold">
                        Oops!
                    </div>
                    <p className="p-0 m-0 uppercase font-bold ">
                        Page not found in server
                    </p>
                    <p className="text-center text-sm md:text-base font-semibold text-slate-400">
                        This link your followed is either outdated, inaccurate,
                        or the server has been instructed not to let you have it
                    </p>
                    <Button
                        type="button"
                        className="mb-10 md:mb-0 mt-4 md:mt-0 max-w-[200px] md:text-lg py-3 md:py-[18px] font-bold"
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
