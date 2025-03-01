export const useFetch = async(url, method, data = null) => {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: method === "POST" ? JSON.stringify(data) : null,
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            const result = await response.json();
            return {
                result: `${result.message} [${result.error}]`,
                code: result.status
            }
        }
        const result = await response.json();
        return {
            result: result,
            code: response.status
        }
    } catch (error) {
        return {
            result: error,
            code: 500
        }
    }
}