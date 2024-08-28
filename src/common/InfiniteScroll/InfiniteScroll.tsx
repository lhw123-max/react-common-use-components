import React, {useEffect, useState, useRef, ReactNode} from 'react';
import {debounce} from "../../utils";



interface InfiniteScrollProps {
    children: ReactNode;
    hasMore?: boolean;
    loadMore?: () => void;
    loading?: ReactNode;
    end?: ReactNode;
    threshold?: number;
    total?: number
    dataLength?: number
}

const InfiniteScroll = ({
                            children,
                            hasMore,
                            loadMore,
                            loading,
                            end,
                            threshold = 0,
                            total,
                            dataLength
                        }: InfiniteScrollProps) => {
    const [showLoading, setShowLoading] = useState(false);
    const scrollTopRef = useRef(0);
    const topValueRef = useRef(0);

    const getScrollTop = () => {
        return document?.documentElement?.scrollTop || document?.body?.scrollTop || 0;
    };

    const handleScroll = debounce(() => {
        const scrollTop = getScrollTop();
        scrollTopRef.current = scrollTop;

        const marginBottom = document.documentElement.scrollHeight - (document.documentElement.scrollTop + document.body.scrollTop) - document.documentElement.clientHeight;

        if (marginBottom <= threshold && scrollTop > topValueRef.current && hasMore) {
            setShowLoading(true);
            setTimeout(() => {
                setShowLoading(false);
                if (loadMore) {
                    loadMore();
                }
            }, 500);
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore, loadMore, threshold]);

    useEffect(() => {
        topValueRef.current = scrollTopRef.current;
    }, [dataLength]);

    return (
        <div>
            {children}
            <style>
                {`
                    @keyframes loading {
                      0% { transform: rotate(0deg); }
                      25% { transform: rotate(-3deg); }
                      50% { transform: rotate(3deg); }
                      75% { transform: rotate(-3deg); }
                      100% { transform: rotate(0deg); }
                    }
                `}
            </style>
            {(hasMore && showLoading) && <div style={{paddingBottom: "1rem"}}>
                {loading ? loading :
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                        <div style={{fontSize: "0.75rem", color: "#b3b3b3", margin: "0.5rem", animation: 'loading 1s infinite',}}>加载中...</div>
                    </div>}
            </div>}
            {(dataLength === total) && <div style={{paddingBottom: "1rem"}}>
                {end ? end :
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                        <div style={{fontSize: "0.75rem", color: "#b3b3b3", margin: "0.5rem"}}>没有更多了</div>
                    </div>}
            </div>}
        </div>
    );
};

export default InfiniteScroll;
