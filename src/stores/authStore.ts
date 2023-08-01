import create, { StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

export type AuthState = {
    accessToken: string;
    setAccessToken: (token: string) => void;
};

type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>,
) => StateCreator<AuthState>;

export const authStore = create<AuthState>(
    (persist as unknown as AuthPersist)(
        (set) => ({
            accessToken: "",
            setAccessToken: (accessToken: string) => set({ accessToken }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default authStore;
