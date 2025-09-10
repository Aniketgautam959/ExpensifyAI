import ClerkThemeProvider from '@/components/ClerkThemeProvider';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ClerkThemeProvider>
        {children}
      </ClerkThemeProvider>
    </ThemeProvider>
  );
}
