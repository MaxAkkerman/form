import {
    Divider,
    MenuItem,
    Stack,
    useTheme
} from "@mui/material";
import {defaultValues, SUBSCRIBED_OPTIONS} from "../constants";
import {SubmitHandler, UseFormReturn} from "react-hook-form";
import {ViewControllerSchema} from "../schema";
import {FormField} from "../../../shared/components/Input/FormField";
import {IUser} from "../../../shared/types";
import {useForm} from "../../../shared/hooks/useForm";
import * as React from "react";
import {ToggleThemeButton} from "../../../app/ThemeProvider/ToggleThemeButton";
import {Button, TextField, Checkbox} from "../../../shared/styles/componnents";
import {useContext} from "react";
import {UsersStoreContext} from "../../../app/StoreProvider";

export function ViewController() {
    const theme = useTheme();
    const {handleAddUser,handleDeleteUser} = useContext(UsersStoreContext);

    const form: UseFormReturn<IUser> = useForm<IUser>({
        schema: ViewControllerSchema,
        defaultValues: defaultValues
    });
    const {register, handleSubmit, reset, formState} = form;
    const {errors} = formState;

    const onSubmit: SubmitHandler<IUser> = (newUser) => {
        handleAddUser({newUser});
        reset()
    }

    return (
        <Stack
            spacing='1rem'
            flex={1}
            display='flex'
            flexDirection='column'
            padding='0.5rem'
        >
            <Stack
                spacing='1.2rem'
                flex={1}
                display='flex'
                flexDirection='column'
            >
                <FormField
                    register={register}
                    component={
                        <TextField
                            placeholder={'Name'}
                        />
                    }
                    errors={errors}
                    name={'name'}
                />
                <FormField
                    register={register}
                    component={
                        <TextField
                            type="number"
                            inputProps={{min: "0", step: "1"}}
                            placeholder={'Age'}
                        />
                    }
                    errors={errors}
                    name={'age'}
                    sx={{marginTop: '0.7rem !important'}}
                />
                <FormField
                    register={register}
                    name={'subscription'}
                    sx={{marginTop: '0.7rem !important'}}
                    component={
                        <TextField
                            select
                            defaultValue={'Not Subscribed'}
                        >
                            {SUBSCRIBED_OPTIONS.map(({label, value}) =>
                                <MenuItem
                                    key={label}
                                    value={value}
                                >
                                    {label}
                                </MenuItem>
                            )
                            }
                        </TextField>
                    }
                />
                <FormField
                    sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: '0 !important'
                    }}
                    register={register}
                    component={
                        <Checkbox disableRipple/>
                    }
                    name={'employment'}
                    label={'Employed'}
                />
                <Button
                    theme={theme}
                    onClick={handleSubmit(onSubmit)}
                >
                    Insert
                </Button>
            </Stack>
            <Divider
                sx={{border: '1px solid black', width: '90%', margin: '2rem auto 1rem auto !important'}}
                orientation="horizontal"
                flexItem
            />
            <Stack
                spacing='1.2rem'
                flex={1}
                display='flex'
                flexDirection='column'
                marginTop='0 !important'
                padding='0.5rem'
            >
                <ToggleThemeButton/>
                <Button
                    theme={theme}
                    onClick={handleDeleteUser}
                >
                    Delete
                </Button>
            </Stack>
        </Stack>
    )
}
