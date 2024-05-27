import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toaster, toast } from 'sonner';

interface ToastContextType {
  addToast: (
    type: 'success' | 'error' | 'info' | 'warning',
    message: string
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<
    { type: 'success' | 'error' | 'info' | 'warning'; message: string }[]
  >([]);

  const addToast = (
    type: 'success' | 'error' | 'info' | 'warning',
    message: string
  ) => {
    toast[type](message);
    setToasts([...toasts, { type, message }]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Toaster richColors closeButton position='top-right' expand={false} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
