import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Z Protocol',
  defaultTitle: 'Z Protocol',
  description:
    'The Leading DeFi Ecosystem.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ZProtocol',
    site: '@ZProtocol',
  },
  openGraph: {
    title: 'ZPROTOCOL - THE LEADING DEFI ECOSYSTEM',
    description:
      'The most popular AMM on MutliChains by user count!',
    images: [{ url: 'https://zprotocol.goldstar.icu/images/zprotocol/about_img01.png' }],
  },
}
