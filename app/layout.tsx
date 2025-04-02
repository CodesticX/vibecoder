import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/utils/ ThemeProvider';

export const metadata: Metadata = {
  title: 'Book.me - Schedule Sessions with Your Favorite Creators & Experts',
  description: 'Book personalized sessions, workshops, and consultations with top creators, experts, and professionals. Find and schedule the perfect session today!',
  keywords: [
    'booking',
    'schedule',
    'creators',
    'experts',
    'sessions',
    'consultations',
    'workshops',
    'appointments',
    'online booking',
    'virtual sessions',
    'mentorship',
    'coaching',
    'events',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-slate-950 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
