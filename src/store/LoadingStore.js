import { create } from "zustand";
import { produce } from 'immer';

const initLoading = {
    loading: false,
    progress: 0,
    actionLoading: false,
    actionProgress: 0
}

const useLoadingStore = create((set) => ({
    pageLoading: initLoading,
    setPageLoading(loading, progress) {
        set(produce(state => { state.pageLoading.loading = loading }));
        if (progress) set(produce(state => { state.pageLoading.progress = progress }))
    }
}));

export default useLoadingStore;