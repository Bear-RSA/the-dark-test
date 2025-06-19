// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AnswersProvider } from '@/context/AnswersContext';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnswersProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnswersProvider>
  );
}
