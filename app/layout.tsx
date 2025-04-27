import { FC } from 'react';
import { inter } from './ui/fonts';
import '@/app/ui/global.css';

type Props = Readonly<{ children: React.ReactNode }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
