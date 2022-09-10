import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <>
      <ContentLoader
        viewBox="0 0 200 100"
        backgroundColor="#454545"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="12" y="0" rx="0" ry="4" width="170" height="100" />
      </ContentLoader>
    </>
  );
}
