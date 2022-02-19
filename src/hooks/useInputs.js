import {useCallback, useState} from "react";

function useInputs(init) {
    const [value, setValue] = useState(init);

    const onChange = useCallback(e => {
       setValue(e.target.value);
    }, []);

    const reset = useCallback(() => {
       setValue("");
    }, []);

    return [value, onChange, reset];
}

export default useInputs;