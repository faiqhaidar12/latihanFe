import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} className="w-full rounded mb-4" />
      <InfoPost {...infoPost} />
    </article>
  );
}
