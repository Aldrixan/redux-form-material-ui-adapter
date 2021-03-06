import React from "react"
import TextField from "@material-ui/core/TextField"

export default function ReduxFormMaterialUITextField({
    label,
    input,
    meta: { touched, invalid, error, warning },
    defaultValue,
    helperText,
    ...custom
}) {
    return (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={(touched && (error || warning)) || helperText}
            {...input}
            {...custom}
        />
    )
}
