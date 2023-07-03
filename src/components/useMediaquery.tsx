import {useState, useEffect } from "react";
interface IQuery {
    query: string;
}

export function useMediaQuery(obj: IQuery): boolean {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia(obj.query);
        setMatches(mediaQuery.matches);
        mediaQuery.addEventListener('change', (event) =>  setMatches(event.matches));
        return () => mediaQuery.removeEventListener('change', (event) => event.matches);
    }, [matches]);
    return matches;
}