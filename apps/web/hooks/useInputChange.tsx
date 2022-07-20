import { useCallback } from "react";

export const useInputChange = (updater) => {
    const handleInputchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            updater((currentState) => {
                return {
                    ...currentState,
                    [name]: value
                }
            });
        },
        []
    );

    return handleInputchange;
}