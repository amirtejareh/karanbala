import create from 'zustand';

export type UserState = {
  user: any;
  setUser: (user: any) => void;
};

const userStore = create((set?: any) => ({
  user: null,
  setUser: (user: string) => set({ user }),
}));


export default userStore;
