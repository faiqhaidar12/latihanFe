export default function InfoPost({
  category,
  date,
  title,
  shortDesc,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className="text-2xl mt-4">{title}</h2>
      <p className="text-white/60 mt-5 w-10/12">{shortDesc}</p>
      <div className="flex items-center mt-5">
        <img
          src={authorAvatar}
          alt="author1"
          className="rounded-full w-14 h-14 object-cover"
        />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <div className="text-white/60 text-sm mt-1">{authorJob}</div>
        </div>
      </div>
    </>
  );
}
