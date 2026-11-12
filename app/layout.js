import './globals.css';
import config from '../lib/config';

export const metadata = {
  title: `${config.name} | ${config.title}`,
  description: config.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
