import Hero from '@/components/Hero';
import Instagram from '@/components/Instagram';
import Slider from '@/components/Slider';
import Head from 'next/head';
import Image from 'next/image';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mist Valley Photography</title>
        <meta name='description' content='Observe nature with me' />
        <meta property='og:title' content='Mist Valley Photography' />
        <meta
          property='og:image'
          content='https://cdn.pixabay.com/photo/2017/08/12/17/11/roe-deer-2634729__340.jpg'
        />
        <meta property='og:description' content='Observe nature with me' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        heading='Mist Valley Photography'
        message='I capture moments in nature and keep them alive'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
