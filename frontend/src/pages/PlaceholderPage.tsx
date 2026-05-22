import PageHeader from "../components/common/PageHeader";

const PlaceholderPage = ({ title }: { title: string }) => (
  <main className="screen placeholder-page">
    <PageHeader
      eyebrow="itjang"
      title={title}
      description="화면 구현을 순서대로 진행하고 있습니다."
    />
  </main>
);

export default PlaceholderPage;
