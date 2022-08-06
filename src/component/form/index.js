import Form from "./Form";
import InputField from "./InputField";
import InputCheckboxField from "./InputCheckboxField";
import InputRadioField from "./InputRadioField";
import InputImageUpLoad from "./InputImageUpLoad";
const Field = {
    Input: InputField,
    Checkbox: InputCheckboxField,
    Radio: InputRadioField,
    ImageUpload: InputImageUpLoad,
};

export { Form, Field };
