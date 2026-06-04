import styles from "./index.module.css";
import {useEffect} from "preact/compat";
import {useEffectState} from "../../../stores/effect.ts";
import {useRef} from "preact/hooks";

export const Section = (props: {children: preact.ComponentChild; register?: boolean}) => {
    const { registerSection } = useEffectState();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.register === undefined) return;
        const current = ref.current!;
        if (!current) return;
        const boundary = current.getBoundingClientRect();
        console.log(boundary);
        registerSection({
            x: boundary.x + window.scrollX,
            y: boundary.y + window.scrollY,
            width: boundary.width,
        })
    }, [])

    return <section className={styles.section} ref={ref}>
        {props.children}
    </section>
}