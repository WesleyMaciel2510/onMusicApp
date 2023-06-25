import { useState, useEffect } from 'react';
import { useBetween } from 'use-between';

// ----------- Sharabled State -----------
const useLogicStates = () => {
    const [example, setExample] = useState([]);

    return {
        example,
        setExample,
    };
};

// ----------- All Shared States -----------
export const useSharedState = () => useBetween(useLogicStates);

//= ==============================================================================================
export function useInit() {

    /* useEffect(() => {
        (async () => {
        })();
    }, []); */
}
