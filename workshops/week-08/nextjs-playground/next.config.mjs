/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://cdn.pixabay.com/photo/2024/02/04/06/46/roller-coaster-8551651_1280.jpg/**"
      ),
    ],
  },
};

export default nextConfig;
