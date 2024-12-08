import type { Metadata } from 'next';

const appName = 'First Response Multiplayer';
const appDescription = 'Experience the future of emergency response simulation created by GTAPoliceMods.';

export const siteConfig = {
  name: appName,
  description: appDescription,
  url: 'https://fr-mp.com',
  ogImage: 'https://cdn.gpm.dev/images/frmp/discord_logo.png',
  favicon: 'https://cdn.gpm.dev/images/frmp/favicon.ico',
  links: {
    twitter: 'https://twitter.com/firstresponsemp',
  },
} as const;

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = siteConfig.favicon,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      images: [
        {
          url: image,
          width: 800,
          height: 400,
          alt: title,
        },
      ],
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@firstresponsemp',
    },
    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}