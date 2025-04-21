import toast from "react-hot-toast"
import { changePassword as changePasswordRequest } from "../../services"

export const useChangePassword = () => {
    const changePassword = async (changePasswordRequest, newPassword) => {
        const responseData = await changePasswordRequest({password, newPassword})
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'No fue posible actualizar la contraseña.'
            )   
        }
        toast.success('Contraseña actualizada correctamente.')
    }

    return {
        changePassword
    }
}