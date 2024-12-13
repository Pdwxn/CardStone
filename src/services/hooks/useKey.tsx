/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

export function useKey(key: string, action: () => void) {
    useEffect(() => {
        function callback(e: { code: any }) {
            if (e.code.toLowerCase() === key.toLowerCase()) {
                action();
            }
        }

        document.addEventListener("keydown", callback);

        return function () {
            document.removeEventListener("keydown", callback);
        };
    }, [key, action]);
}