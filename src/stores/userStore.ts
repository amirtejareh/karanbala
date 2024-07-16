import { create, StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

export type UserState = {
  user: any;
  setUser: (user: any) => void;
};

type UserPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>,
) => StateCreator<UserState>;

const userStore = create<UserState>(
  (persist as unknown as UserPersist)(
    (set) => ({
      user: null,
      setUser: (user: string) => set({ user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default userStore;
