import { useField } from "formik";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { IconCloseCircle } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { useAuth } from "../../../context/authContext";
import { useProfileUser } from "../../../context/prodfileUserContext";
import useClickOutside from "../../../hooks/useClickOutside";

const EditHabit = () => {
    const { profileUser } = useProfileUser();
    const [{ value: habits }, , helpper] = useField("habits");
    useEffect(() => {
        helpper.setValue(profileUser.habits);
    }, [profileUser.habits]);

    if (habits?.length < 0) return;
    return (
        <div className="group flex flex-wrap gap-4 justify-center items-center mt-5">
            {habits?.map((habit, index) => (
                <div
                    key={index}
                    className=" relative bg-blue-100 text-primary font-semibold rounded-xl "
                >
                    <div className="peer content-overflow-one-line px-4 py-2 max-w-[400px]">
                        {habit}
                    </div>
                    <span
                        onClick={() => {
                            helpper.setValue(
                                habits.filter((item) => item !== habit)
                            );
                        }}
                        className="absolute -top-[5px] -right-[5px] flex justify-center items-center cursor-pointer text-base text-blue-300 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible "
                    >
                        <IconCloseCircle fill />
                    </span>
                </div>
            ))}
            <AddHabitButton />
        </div>
    );
};

const AddHabitButton = () => {
    const [{ value: habits }, , hepper] = useField("habits");

    const [value, setValue] = useState("");
    const [type, setType] = useState("div");
    const ref = useRef();
    const handleAddHabits = () => {
        if (value.trim() && !habits.includes(value?.trim())) {
            hepper.setValue([...habits, value?.trim()]);
        }
        setType("div");
    };

    useClickOutside(ref, null, handleAddHabits);

    if (habits?.length >= 10) {
        return null;
    }

    if (type === "div") {
        return (
            <div
                onClick={() => setType("input")}
                className=" flex justify-center items-center h-[46px] w-[46px] rounded-xl bg-blue-100 text-primary font-semibold text-2xl  cursor-pointer transition-all "
            >
                +
            </div>
        );
    } else {
        return (
            <div ref={ref}>
                <Input
                    name="habit"
                    type="text"
                    placeholder="Enter your habit"
                    className="inline-flex max-w-[200px] transition-all"
                    inputClassName="px-3 py-2  placeholder:text-base transition-al"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddHabits();
                        }
                    }}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        );
    }
};

export default EditHabit;
