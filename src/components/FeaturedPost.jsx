import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex items-center">
        <div className="pr-4 w-8/12">
          <img src="/gambar1.png" alt="gambar" className="rounded-xl w-full" />
        </div>
        <div className="w-4/12 px-4">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDesc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
