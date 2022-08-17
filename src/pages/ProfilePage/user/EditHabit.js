import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../component/Button";
import { IconCloseCircle } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { useProfileUser } from "../../../context/prodfileUserContext";
import { db } from "../../../firebase-app/firebase-config";
import useClickOutside from "../../../hooks/useClickOutside";

const EditHabit = () => {
    const { profileUser } = useProfileUser();
    const habits = profileUser.habits;
    const [habitsClone, setHabitsClone] = useState([]);
    useEffect(() => {
        setHabitsClone([...habits]);
    }, [habits]);
    if (habits?.length < 0) return;
    const handleUpdateHabits = () => {
        toast.promise(
            async () => {
                const userRef = doc(db, "users", profileUser.uid);
                try {
                    await updateDoc(userRef, {
                        habits: [...habitsClone],
                    });
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: "Plase wait ....",
                success: "Update habits is success",
                error: "Update habits is faild",
            }
        );
    };

    return (
        <div className="flex flex-col gap-3 md:gap-4">
            <div className="group flex flex-wrap gap-3 md:gap-4 justify-center items-center mt-3 md:mt-5">
                {habitsClone?.map((habit, index) => (
                    <div
                        key={index}
                        className=" relative bg-green-bright text-primary font-semibold rounded-xl "
                    >
                        <div className="peer content-overflow-one-line px-4 py-2 max-w-[400px]">
                            {habit}
                        </div>
                        <span
                            onClick={() => {
                                setHabitsClone((prev) =>
                                    prev.filter((item) => item !== habit)
                                );
                            }}
                            className="absolute -top-[5px] -right-[5px] flex justify-center items-center cursor-pointer text-base text-green-light opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible "
                        >
                            <IconCloseCircle fill />
                        </span>
                    </div>
                ))}
                <AddHabitButton
                    habits={habitsClone}
                    setHabits={setHabitsClone}
                />
            </div>
            {JSON.stringify(habits) !== JSON.stringify(habitsClone) && (
                <div className="flex justify-center items-center gap-5">
                    <Button
                        className=" max-w-[37px] md:max-w-[46px] max-h-[37px]  md:max-h-[46px] text-base px-3 py-3 shadow-style-3 hover:shadow-style-3"
                        kind="secondary"
                        onClick={handleUpdateHabits}
                    >
                        ✓
                    </Button>
                    <Button
                        className=" max-w-[37px] md:max-w-[46px] max-h-[37px]  md:max-h-[46px] text-base px-3 py-3 shadow-style-3 hover:shadow-style-3 text-[tomato]"
                        kind="secondary"
                        onClick={() => setHabitsClone(habits)}
                    >
                        x
                    </Button>
                </div>
            )}
        </div>
    );
};

const AddHabitButton = ({ habits, setHabits }) => {
    const [value, setValue] = useState("");
    const [type, setType] = useState("div");
    const ref = useRef();
    const handleAddHabits = () => {
        if (value.trim() && !habits.includes(value?.trim())) {
            setHabits([...habits, value?.trim()]);
        }
        setType("div");
        setValue("");
    };

    useClickOutside(ref, null, handleAddHabits);
    if (habits?.length >= 10) {
        return null;
    }

    if (type === "div") {
        return (
            <div
                onClick={() => setType("input")}
                className=" flex justify-center items-center w-[37px] h-[37px] md:h-[46px] md:w-[46px] rounded-xl bg-green-bright text-primary font-semibold text-2xl  cursor-pointer transition-all "
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
                    className="inline-flex max-w-[180px] md:max-w-[200px] transition-all"
                    inputClassName="px-3 py-2  placeholder:text-base transition-al"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddHabits();
                        }
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        );
    }
};

export default EditHabit;
