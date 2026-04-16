import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Order {
  id: string;
  date: string;
  items: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
    quantity: number;
  }>;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

interface User {
  email: string;
  name?: string;
  orders: Order[];
}

interface AuthStore {
  user: User | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  addOrder: (order: Order) => void;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (email, name) => set({ 
        user: { 
          email, 
          name: name || email.split('@')[0],
          orders: [] 
        } 
      }),
      logout: () => set({ user: null }),
      addOrder: (order) => set((state) => ({
        user: state.user ? {
          ...state.user,
          orders: [order, ...state.user.orders]
        } : null
      })),
    }),
    {
      name: 'vexo-auth-storage',
    }
  )
);
