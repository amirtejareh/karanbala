import { create, StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

export type EducationDetailState = {
    book: string;
    setBook: (book: string) => void;
};

type EducationDetailPersist = (
    config: StateCreator<EducationDetailState>,
    options: PersistOptions<EducationDetailState>,
) => StateCreator<EducationDetailState>;

export const EducationDetailStore = create<EducationDetailState>(
    (persist as unknown as EducationDetailPersist)(
        (set) => ({
            book: "",
            setBook: (book: string) => set({ book }),
        }),
        {
            name: "EducationDetail-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default EducationDetailStore;
