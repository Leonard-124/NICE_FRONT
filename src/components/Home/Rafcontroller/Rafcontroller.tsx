
import React, { useEffect, useRef } from "react";
import "./raf-scroller.css"

type RafScrollerProps = {
    images: string[];
    pxPerSecond?: number; //speed of movement
    height?: number;
    paused?: boolean;
}

export const RafScroller: React.FC<RafScrollerProps> = ({
    images,
    pxPerSecond = 60,
    height = 160,
    paused = false,
}) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const offsetRef = useRef<number>(0);
    const lastTsRef = useRef<number | null>(null)

    const trackImages = [...images, ...images];

    useEffect(() => {
        let rafId = 0;

        const loop = (ts: number) => {
            if (!trackRef.current) return;

            if(lastTsRef.current == null) lastTsRef.current = ts;
            const dt = ts - lastTsRef.current;
            lastTsRef.current = ts;

            if(!paused) {
                const deltaPx = (pxPerSecond * dt) / 1000;
                offsetRef.current -= deltaPx;

                const trackWidth = trackRef.current.scrollWidth / 2;

                if (Math.abs(offsetRef.current) >= trackWidth) {
                    offsetRef.current += trackWidth;
                }

                trackRef.current.style.transform = `translateX(${offsetRef.current}px)`
            }
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafId);
    }, [pxPerSecond, paused, images]);

    return (
        <div className="raf-scroller" style={{height}}>
            <div className="raf-scroller_track" ref={trackRef}>
                {trackImages.map((src, i) => (
                    <div className="raf-scroller_item" key={`${src}-${i}`}>
                        <img src={src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}