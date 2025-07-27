import { watch } from "vue-demi";
import { throttle } from "echarts/core";

export function useAutoResize(root, chart, autoresize) {
    // 监听resize
    watch(
        [root, chart, autoresize],
        ([root, chart, autoresize], _, onCleanup) => {
            let resizeObserver;
            if (root && chart && autoresize) {
                const { offsetWidth, offsetHeight } = root;
                let initialResizeTriggered = false;
                const callback = () => {
                    chart.resize();
                };
                const resizeCallback = throttle(callback, 100);
                resizeObserver = new ResizeObserver(() => {
                    if (!initialResizeTriggered) {
                        initialResizeTriggered = true;
                        if (
                            root.offsetWidth === offsetWidth &&
                            root.offsetHeight === offsetHeight
                        )
                            return;
                    }
                    if (root.offsetWidth === 0 || root.offsetHeight === 0) return;

                    resizeCallback();
                });
                resizeObserver.observe(root);
            }

            onCleanup(() => {
                if (resizeObserver) {
                    resizeObserver.disconnect();
                    resizeObserver = null;
                }
            });
        }
    );
}