import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <>
      <ContentLoader
        viewBox="0 0 200 100"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="12" y="0" rx="0" ry="4" width="170" height="100" />
      </ContentLoader>
    </>
  );
}
