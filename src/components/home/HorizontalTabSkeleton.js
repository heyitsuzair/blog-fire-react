import ContentLoader from "react-content-loader";

export default function HorizontalTabSkeleton() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <ContentLoader
        viewBox="0 0 300 300"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="40" rx="2" ry="2" width="300" height="200" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 300 300"
        backgroundColor="#f2f2f2"
        foregroundColor="#7a7b7d"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="40" rx="2" ry="2" width="300" height="200" />
      </ContentLoader>
    </div>
  );
}
