import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <div style={{ display: "flex" }}>
      <ContentLoader
        viewBox="0 0 200 200"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="15" rx="2" ry="2" width="150" height="180" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 200 200"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="15" rx="2" ry="2" width="150" height="180" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 200 200"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="15" rx="2" ry="2" width="150" height="180" />
      </ContentLoader>
    </div>
  );
}
