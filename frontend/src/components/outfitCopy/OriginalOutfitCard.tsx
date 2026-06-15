import { Box, ShieldCheck } from "lucide-react";
import type { OutfitPost } from "../../types";

type OriginalOutfitCardProps = {
  post: OutfitPost;
};

const OriginalOutfitCard = ({ post }: OriginalOutfitCardProps) => (
  <article className="copy-original-card">
    <img alt={`${post.title} 공개 코디`} src={post.imageUrl} />
    <div className="copy-original-card__body">
      <div className="copy-badge-row">
        <span className="copy-badge copy-badge--scope">
          <ShieldCheck aria-hidden size={13} />
          {post.visibility === "PUBLIC" ? "공개" : "친구공개"}
        </span>
        <span className="copy-badge copy-badge--tryon">
          <Box aria-hidden size={13} />
          3D로 입어보기 가능
        </span>
      </div>
      <p>{post.author}님의 코디</p>
      <h2>{post.title}</h2>
      <div className="copy-tag-row">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  </article>
);

export default OriginalOutfitCard;
