import { useState } from "react";
import{
    validateUsername,
    validateUsernameMessage,
    validationAvatarUrl,
    avatarUrlValidationMessage,
    validateDescription,
    descriptionValidationMessage,
    validateTitle,
    validateTitleMessage
} from '../../shared/validators'
import { Input } from "../Input"

const inputs = [
    {
        field: 'username',
        lable: 'Username',
        validationMessage: validateUsernameMessage,
        type: 'text'
    },
    {
        field: 'title',
        lable: 'Title',
        validationMessage: validateTitleMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        lable: 'Avatar Url',
        validationMessage: avatarUrlValidationMessage,
        type: 'text'
    },
    {
        field: 'description',
        lable: 'Descripción',
        validationMessage: descriptionValidationMessage,
        type: 'text'
    }
]

export const ChannelSettings = ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        title: {
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        avatarUrl: {
            isValid: validationAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        }
    })
}

const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
        ...prevState,
        [field]: {
            ...prevState[field],
            value
        }
    }))
}

const handleInputValidationOnBlur = (value, field) => {
    let isValid = false

    switch(field){
        case 'username':
            isValid = validateUsername(value)
            break
        case 'title':
            isValid = validateTitle(value)
            break
        case 'avatarUrl':
            isValid = validationAvatarUrl(value)
            break
        case 'description':
            isValid = validateDescription(value)
            break
    }

    setFormState((prevState) => ([
        ...prevState,
        [field]: {
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    ]))
}

