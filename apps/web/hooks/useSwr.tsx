import React, { useState, useEffect } from "react";
import { client } from "../utils/client";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const data = client.get(url)
        .then(response => {
          setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            setError(true);
        })

    return {
        data,
        error,
        isLoading
    }
}